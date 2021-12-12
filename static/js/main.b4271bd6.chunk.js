(this["webpackJsonpformula1-season-tracker"]=this["webpackJsonpformula1-season-tracker"]||[]).push([[0],{37:function(e,t,c){},57:function(e,t,c){},59:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(31),r=c.n(s),i=(c(37),c(15)),l=c(2),o=c(8),d=c.n(o),j=c(14),h=c(4),u=c(5),m=c(7),b=c(6),x=c(12),O=c.n(x),p=(c(57),c(0)),g=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={driverStandingsData:[],season:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://ergast.com/api/f1/current/driverstandings.json").then((function(e){t.setState({driverStandingsData:e.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,season:e.data.MRData.StandingsTable.season})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.driverStandingsData,c=e.season,n=t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:e.position}),Object(p.jsx)("td",{className:"align-middle",children:Object(p.jsx)("img",{src:"/formula1-season-tracker/drivers/".concat(e.Driver.driverId,".png"),width:"100",height:"100",alt:e.Driver.driverId})}),Object(p.jsxs)("td",{className:"align-middle",children:[Object(p.jsx)("img",{src:"/formula1-season-tracker/flags/".concat(e.Driver.nationality,".png"),width:"32",height:"32",className:"flagimg",alt:e.Driver.nationality}),"".concat(e.Driver.givenName," ").concat(e.Driver.familyName)]}),Object(p.jsx)("td",{className:"align-middle",children:Object(p.jsx)("img",{src:"/formula1-season-tracker/constructors/".concat(e.Constructors[0].constructorId,".png"),width:"50",height:"50",alt:e.Constructors[0].constructorId})}),Object(p.jsx)("td",{className:"align-middle",children:e.Constructors[0].name}),Object(p.jsx)("td",{className:"align-middle points-column",children:e.points}),Object(p.jsx)("td",{className:"align-middle points-column",children:e.wins})]},e.Driver.driverId)}));return Object(p.jsx)(p.Fragment,{children:t&&t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{className:"text-center text-light mt-2",children:[c," DRIVER STANDINGS"]}),Object(p.jsx)("div",{className:"container mt-4 table-responsive",children:Object(p.jsxs)("table",{className:"table text-light",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Pos."}),Object(p.jsx)("th",{scope:"col"}),Object(p.jsx)("th",{scope:"col",children:"Driver"}),Object(p.jsx)("th",{scope:"col"}),Object(p.jsx)("th",{scope:"col",children:"Constructor"}),Object(p.jsx)("th",{scope:"col",children:"Points"}),Object(p.jsx)("th",{scope:"col",children:"Wins"})]})}),Object(p.jsx)("tbody",{children:n})]})})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"text-center mt-5",children:Object(p.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component),v=(c(59),function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={seasonSchedule:[],nextRound:null,season:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://ergast.com/api/f1/current.json").then((function(e){t.setState({seasonSchedule:e.data.MRData.RaceTable.Races,season:e.data.MRData.RaceTable.season})}));case 2:return e.next=4,O.a.get("https://ergast.com/api/f1/current/next.json").then((function(e){t.setState({nextRound:e.data.MRData.RaceTable.round})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.seasonSchedule,c=(e.nextRound,e.season),n=t.map((function(e){return Object(p.jsxs)("div",{className:"schedule-item bg-warning d-flex",children:[Object(p.jsx)("div",{className:"circuit-img-container d-none d-md-block",children:Object(p.jsx)("img",{src:"/formula1-season-tracker/circuits/".concat(e.Circuit.circuitId,".png"),width:"154.5",height:"116.25",alt:e.Circuit.circuitId,className:"mt-1"})}),Object(p.jsxs)("div",{className:"info-container mt-2 ml-2",children:[Object(p.jsx)("div",{children:"Round ".concat(e.round)}),Object(p.jsx)("div",{children:Object(p.jsx)("span",{className:"race-name",children:e.raceName})}),Object(p.jsx)("div",{className:"d-block d-xs-none",children:Object(p.jsx)("em",{children:e.Circuit.circuitName})}),Object(p.jsx)("div",{children:Object(p.jsx)("em",{children:"".concat(e.date," / ").concat(e.time.substring(0,5)," (UTC)")})}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)(i.b,{to:"/formula1-season-tracker/results/".concat(e.round),style:{textDecoration:"none"},children:Object(p.jsx)("button",{type:"button",className:"btn btn-primary mt-1 results-button ".concat("enabled"),children:"Race Results >"})})})]}),Object(p.jsxs)("div",{className:"ml-auto",children:[Object(p.jsx)("div",{className:"d-none d-sm-block mt-3 mr-1 mr-md-3 race-country-name",children:Object(p.jsx)("span",{className:"float-right",children:"".concat(e.Circuit.Location.locality," (").concat(e.Circuit.Location.country,")")})}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"/formula1-season-tracker/flags/scheduleflags/".concat(e.Circuit.Location.country,".png"),alt:e.Circuit.circuitId,className:"float-right mr-1 mr-md-3",width:"64",height:"64"})})]})]},e.Circuit.circuitId)}));return Object(p.jsx)(p.Fragment,{children:t&&t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{className:"text-center text-light mt-2",children:[c," SEASON SCHEDULE"]}),Object(p.jsx)("div",{className:"container",children:n})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"text-center mt-5",children:Object(p.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component)),f=(c(65),function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={nextRaceData:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://ergast.com/api/f1/current/next.json").then((function(e){t.setState({nextRaceData:e.data.MRData.RaceTable.Races[0]})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.constUri,t=this.state.nextRaceData;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container-fluid link-nav-bar",children:Object(p.jsxs)("div",{className:"row link-nav-bar-row",children:[Object(p.jsx)(i.b,{to:"".concat(e),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center",children:"Driver Standings"}),Object(p.jsx)(i.b,{to:"".concat(e,"/constructor"),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center midlink",children:"Constructor Standings"}),Object(p.jsx)(i.b,{to:"".concat(e,"/schedule"),style:{textDecoration:"none"},className:"col-xs-4 col-md-2 bg-warning text-dark text-center",children:"Schedule / Race Results"}),Object(p.jsxs)("div",{className:"col-xs-12 col-md-6 bg-dark text-light d-flex justify-content-around",children:[Object(p.jsx)("div",{className:"mt-3 next-race-title",children:"Next Race:"}),null!==t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"mt-1 next-race-location",children:"".concat((null===t||void 0===t?void 0:t.raceName)||"Unknown",", ").concat((null===t||void 0===t?void 0:t.Circuit.circuitName)||"Unknown")}),Object(p.jsx)("div",{children:"".concat((null===t||void 0===t?void 0:t.date)||"Unknown"," / ").concat((null===t||void 0===t?void 0:t.time.substring(0,5))||"Unknown"," (UTC)")})]}),Object(p.jsxs)("div",{className:"mt-1",children:[Object(p.jsx)("div",{children:"".concat((null===t||void 0===t?void 0:t.Circuit.Location.locality)||"Unknown"," (").concat((null===t||void 0===t?void 0:t.Circuit.Location.country)||"Unknown",")")}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"/formula1-season-tracker/flags/scheduleflags/".concat((null===t||void 0===t?void 0:t.Circuit.Location.country)||"Unknown",".png"),width:"50",height:"50",alt:(null===t||void 0===t?void 0:t.Circuit.Location.country)||"Unknown"})})]})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"spinner-border text-warning mt-3",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})]})]})})})}}]),c}(n.Component)),N=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={constructorStandingsData:[],season:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://ergast.com/api/f1/current/constructorstandings.json").then((function(e){t.setState({constructorStandingsData:e.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,season:e.data.MRData.StandingsTable.season})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.constructorStandingsData,c=e.season,n=t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:e.position}),Object(p.jsx)("td",{className:"align-middle",children:Object(p.jsx)("img",{src:"/formula1-season-tracker/constructors/".concat(e.Constructor.constructorId,".png"),width:"50",height:"50",alt:e.Constructor.constructorId})}),Object(p.jsx)("td",{className:"align-middle",children:e.Constructor.name}),Object(p.jsx)("td",{className:"align-middle",children:Object(p.jsx)("img",{src:"/formula1-season-tracker/cars/".concat(e.Constructor.constructorId,".png"),height:"50",alt:e.Constructor.constructorId})}),Object(p.jsx)("td",{className:"align-middle points-column",children:e.points}),Object(p.jsx)("td",{className:"align-middle points-column",children:e.wins})]},e.Constructor.constructorId)}));return Object(p.jsx)(p.Fragment,{children:t&&t.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{className:"text-center text-light mt-2",children:[c," CONSTRUCTOR STANDINGS"]}),Object(p.jsx)("div",{className:"container mt-4 table-responsive",children:Object(p.jsxs)("table",{className:"table text-light",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Pos."}),Object(p.jsx)("th",{scope:"col"}),Object(p.jsx)("th",{scope:"col",children:"Constructor"}),Object(p.jsx)("th",{scope:"col"}),Object(p.jsx)("th",{scope:"col",children:"Points"}),Object(p.jsx)("th",{scope:"col",children:"Wins"})]})}),Object(p.jsx)("tbody",{children:n})]})})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"text-center mt-5",children:Object(p.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(p.jsx)("span",{className:"sr-only",children:"Loading..."})})})})})}}]),c}(n.Component),D=(c(66),function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"getGridPositionDiff",value:function(e,t){var c=Math.abs(parseInt(e)-parseInt(t));return 0===parseInt(t)&&(c=Math.abs(parseInt(e)-20)),c}},{key:"positionImproved",value:function(e,t){var c=t;return 0===parseInt(t)&&(c=20),parseInt(c)>parseInt(e)}},{key:"render",value:function(){var e=this,t=this.props.raceResults,c=t&&null!==t&&t.Results.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:t.position&&t.position}),Object(p.jsx)("td",{className:"align-middle",children:"".concat(t.Driver.givenName&&t.Driver.givenName," ").concat(t.Driver.familyName&&t.Driver.familyName)}),Object(p.jsx)("td",{className:"align-middle",children:t.Constructor.name&&t.Constructor.name}),Object(p.jsx)("td",{className:"align-middle",children:t.laps&&t.laps}),Object(p.jsx)("td",{className:"align-middle",children:t.grid&&"0"===t.grid?"Pits":t.grid}),Object(p.jsx)("td",{className:"align-middle",children:e.positionImproved(t.position,t.grid)?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"mr-1 text-success",children:e.getGridPositionDiff(t.position,t.grid)}),Object(p.jsx)("i",{className:"fas fa-angle-double-up text-success"})]}):parseInt(t.grid)<parseInt(t.position)?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("span",{className:"mr-1 text-danger",children:e.getGridPositionDiff(t.position,t.grid)}),Object(p.jsx)("i",{className:"fas fa-angle-double-down text-danger"})]}):""}),Object(p.jsx)("td",{className:"align-middle",children:t.Time&&t.Time.time}),Object(p.jsx)("td",{className:"align-middle",children:t.status&&t.status}),Object(p.jsxs)("td",{className:"align-middle d-flex",children:[t.points&&t.points,t.FastestLap&&"1"===t.FastestLap.rank&&Object(p.jsx)("i",{className:"ml-3 mt-2 fas fa-stopwatch fa-xs"})]})]},t.Driver.driverId)}));return Object(p.jsx)(p.Fragment,{children:t&&null!==t?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container mt-4 table-responsive",children:Object(p.jsxs)("table",{className:"table table-sm text-light",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Pos."}),Object(p.jsx)("th",{scope:"col",children:"Driver"}),Object(p.jsx)("th",{scope:"col",children:"Constructor"}),Object(p.jsx)("th",{scope:"col",children:"Laps"}),Object(p.jsx)("th",{scope:"col",children:"Grid"}),Object(p.jsx)("th",{scope:"col"}),Object(p.jsx)("th",{scope:"col",children:"Time"}),Object(p.jsx)("th",{scope:"col",children:"Status"}),Object(p.jsx)("th",{scope:"col",children:"Points"})]})}),Object(p.jsx)("tbody",{children:c})]})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h3",{className:"text-light text-center mt-5",children:"Data not available"})})})}}]),c}(n.Component)),k=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(u.a)(c,[{key:"render",value:function(){var e=this.props.qualifyingResults,t=e&&null!==e&&e.QualifyingResults.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:e.position&&e.position}),Object(p.jsx)("td",{className:"align-middle",children:"".concat(e.Driver.givenName," ").concat(e.Driver.familyName)}),Object(p.jsx)("td",{className:"align-middle",children:e.Constructor.name}),Object(p.jsx)("td",{className:"align-middle",children:e.Q1}),Object(p.jsx)("td",{className:"align-middle",children:e.Q2}),Object(p.jsx)("td",{className:"align-middle",children:e.Q3})]},e.Driver.driverId)}));return Object(p.jsx)(p.Fragment,{children:e&&null!==e?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container mt-4 table-responsive",children:Object(p.jsxs)("table",{className:"table table-sm text-light",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Pos."}),Object(p.jsx)("th",{scope:"col",children:"Driver"}),Object(p.jsx)("th",{scope:"col",children:"Constructor"}),Object(p.jsx)("th",{scope:"col",className:"pl-5",children:"Q1"}),Object(p.jsx)("th",{scope:"col",className:"pl-5",children:"Q2"}),Object(p.jsx)("th",{scope:"col",className:"pl-5",children:"Q3"})]})}),Object(p.jsx)("tbody",{children:t})]})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h3",{className:"text-light text-center mt-5",children:"Data not available"})})})}}]),c}(n.Component),y=function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={fastestLaps:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){for(var e=this.props.raceResults,t=e&&e.Results||[],c=[],n=0;n<t.length;n++)c.push({driverId:t[n].Driver.driverId,driverName:"".concat(t[n].Driver.givenName," ").concat(t[n].Driver.familyName),constructor:t[n].Constructor.name,lapData:t[n].FastestLap||{rank:"20"}});c.sort((function(e,t){return parseInt(e.lapData.rank)>parseInt(t.lapData.rank)?1:-1})),this.setState({fastestLaps:c})}},{key:"render",value:function(){var e=this.state.fastestLaps,t=this.props.raceResults,c=e&&null!==e&&e.length>0&&e.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{className:"align-middle",children:e.lapData.rank}),Object(p.jsx)("td",{className:"align-middle",children:e.driverName}),Object(p.jsx)("td",{className:"align-middle",children:e.constructor}),Object(p.jsx)("td",{className:"align-middle",children:e.lapData.lap&&e.lapData.lap}),Object(p.jsx)("td",{className:"align-middle",children:e.lapData.Time&&e.lapData.Time.time}),Object(p.jsx)("td",{className:"align-middle",children:e.lapData.AverageSpeed&&e.lapData.AverageSpeed.speed})]},e.driverId)}));return Object(p.jsx)(p.Fragment,{children:t&&null!==t?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container mt-4 table-responsive",children:Object(p.jsxs)("table",{className:"table table-sm text-light",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Pos."}),Object(p.jsx)("th",{scope:"col",children:"Driver"}),Object(p.jsx)("th",{scope:"col",children:"Constructor"}),Object(p.jsx)("th",{scope:"col",children:"Lap"}),Object(p.jsx)("th",{scope:"col",children:"Time"}),Object(p.jsx)("th",{scope:"col",children:"Average Speed (kph)"})]})}),Object(p.jsx)("tbody",{children:c})]})})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h3",{className:"text-light text-center mt-5",children:"Data not available"})})})}}]),c}(n.Component),R=(c(67),function(e){Object(m.a)(c,e);var t=Object(b.a)(c);function c(e){var n;return Object(h.a)(this,c),(n=t.call(this,e)).state={activeTab:"R",raceResults:null,qualifyingResults:null},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,c=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,e.next=3,O.a.get("https://ergast.com/api/f1/current/".concat(t.params.roundId,"/results.json")).then((function(e){c.setState({raceResults:e.data.MRData.RaceTable.Races[0]})}));case 3:return e.next=5,O.a.get("https://ergast.com/api/f1/current/".concat(t.params.roundId,"/qualifying.json")).then((function(e){c.setState({qualifyingResults:e.data.MRData.RaceTable.Races[0]})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,c=t.activeTab,n=t.raceResults,a=t.qualifyingResults;return Object(p.jsxs)(p.Fragment,{children:[n&&null!==n?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h1",{className:"text-center mt-5 text-light",children:"".concat(n.season," ").concat(n.raceName)})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("h1",{className:"text-light text-center mt-5 mb-3",children:"No results for this race yet"})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("ul",{className:"nav nav-tabs",children:[Object(p.jsx)("li",{className:"nav-item",onClick:function(){e.setState({activeTab:"R"})},children:Object(p.jsx)("a",{className:"nav-link ".concat("R"===c?"active":""),children:"Race"})}),Object(p.jsx)("li",{className:"nav-item",onClick:function(){e.setState({activeTab:"Q"})},children:Object(p.jsx)("a",{className:"nav-link ".concat("Q"===c?"active":""),children:"Qualifying"})}),Object(p.jsx)("li",{className:"nav-item",onClick:function(){e.setState({activeTab:"F"})},children:Object(p.jsx)("a",{className:"nav-link ".concat("F"===c?"active":""),children:"Fastest Laps"})})]}),"R"===c?Object(p.jsx)(D,{raceResults:n}):"Q"===c?Object(p.jsx)(k,{qualifyingResults:a}):"F"===c?Object(p.jsx)(y,{raceResults:n}):Object(p.jsx)(p.Fragment,{})]})]})}}]),c}(n.Component));var C=function(){var e="/formula1-season-tracker";return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(f,{constUri:e}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"".concat(e),exact:!0,component:g}),Object(p.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(p.jsx)(l.a,{path:"".concat(e,"/constructor"),exact:!0,component:N}),Object(p.jsx)(l.a,{path:"".concat(e,"/schedule"),exact:!0,component:v}),Object(p.jsx)(l.a,{path:"".concat(e,"/results/:roundId"),exact:!0,component:R})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(C,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.b4271bd6.chunk.js.map