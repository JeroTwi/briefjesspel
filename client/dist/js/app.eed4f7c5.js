(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"48bc":function(e,t,n){"use strict";var r=n("67e9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("2ca0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("b408"),i=n.n(a),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"infoCorner"}),n("div",{staticClass:"infoCornerBottomLeft"}),n("div",{staticClass:"homeCubeDropShadow"}),n("div",{staticClass:"homeCube"},[e.isLoaded?n("div",[e.gameStarted?n("Game"):e.gameCreated?n("Setup"):n("Home")],1):n("SpinnerLoader",{staticClass:"centerHome",attrs:{color:"#344558"}})],1)])},s=[],c=n("2f62"),u=n("d1ad"),l=n.n(u),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" Komt binnenkort! ")])},d=[],p={name:"Game",components:{},computed:Object(c["d"])({})},f=p,v=n("2877"),h=Object(v["a"])(f,m,d,!1,null,"0f3730a9",null),y=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"centerHome"},[n("button",{staticClass:"generalFont nieuwSpel transparentButton",on:{click:e.newGame}},[e._v("NIEUW SPEL")])])},w=[],b={name:"Home",methods:Object(c["b"])(["newGame"])},P=b,T=(n("f03f"),Object(v["a"])(P,g,w,!1,null,"a5455f92",null)),x=T.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.shareableLink&&e.isMaster?n("div",{staticClass:"generalFont spelLink linkPosition"},[e._v(e._s(e.shareableLink))]):e._e(),n("br"),n("br"),e._playerName?!e._entriesPerPlayer&&e.isMaster?n("div",[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"entriesPerPlayer"}},[e._v("Aantal briefjes per speler:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entriesPerPlayer,expression:"entriesPerPlayer"},{name:"focus",rawName:"v-focus"}],staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"entriesPerPlayer",type:"number",min:"1",max:"9"},domProps:{value:e.entriesPerPlayer},on:{input:function(t){t.target.composing||(e.entriesPerPlayer=t.target.value)}}}),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.setEntriesPerPlayer(e.entriesPerPlayer)}}},[e._v("»")])]):e.canStart&&e.isMaster?n("div",[n("button",{staticClass:"generalFont spelOpzetNaam centerTextInput",on:{click:e.startGame}},[e._v("Start")])]):n("div",{staticClass:"generalFont spelOpzetBriefjes centerTextInput"},[e._v(" Wachten tot het spel kan beginnen... ")]):n("div",[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"playerName"}},[e._v("Vul je naam in:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"},{name:"focus",rawName:"v-focus"}],staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"playerName",type:"text"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.setPlayerName(e.playerName)}}},[e._v("»")])])])},R=[],S=(n("b0c0"),n("5530")),j={name:"Setup",data:function(){return{playerName:"",entriesPerPlayer:4}},computed:Object(S["a"])({},Object(c["d"])({_playerName:function(e){return e.game.player.name},_entriesPerPlayer:function(e){return e.game.entriesPerPlayer}}),{},Object(c["c"])(["isMaster","shareableLink","canStart"])),methods:Object(c["b"])(["setPlayerName","setEntriesPerPlayer","startGame"])},C=j,E=(n("48bc"),Object(v["a"])(C,O,R,!1,null,"437c2af2",null)),k=E.exports,N={name:"App",components:{SpinnerLoader:l.a,Game:y,Home:x,Setup:k},computed:Object(c["d"])({isLoaded:function(e){return e.isLoaded},gameCreated:function(e){return e.game.isCreated},gameStarted:function(e){return e.game.isStarted}})},_=N,F=(n("5c0b"),Object(v["a"])(_,o,s,!1,null,null,null)),G=F.exports,L=(n("4160"),n("d3b7"),n("159b"),n("ddb0"),n("96cf"),n("1da1")),I={state:{isConnected:!1,reconnectError:!1},mutations:{SOCKET_ONOPEN:function(e,t){r["a"].prototype.$socket=t.currentTarget,e.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){console.info(t)},SOCKET_RECONNECT:function(e,t){console.debug(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.reconnectError=!0}},actions:{sendMessage:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.state,i=t.messageType,o=t.payload,a.isConnected){n.next=4;break}throw new Error("Not connected; could not send message "+i);case 4:r["a"].prototype.$socket.send(JSON.stringify({type:i,payload:o}));case 5:case"end":return n.stop()}}),n)})))()}}},M=(n("a623"),n("4de4"),n("07ac"),function(e,t){return{messageType:e,payload:t,type:"sendMessage"}}),H=function(){return"Capone Light"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=window.location.protocol,n=window.location.host;return"localhost:8080"===n&&(n="localhost:4000"),"".concat(t,"//").concat(n,"/").concat(e)},z={state:{isLoaded:!1,isCreated:!1,path:null,players:{},teams:{},master:null,entriesPerPlayer:0,isStarted:!1,isFinished:!1,turnTime:0,scorePerEntry:1,roundStarted:!1,roundFinished:!1,activeTeam:null,activePlayer:null,nextTeam:null,nextPlayer:null,turnStarted:!1,turnFinished:!1,activeEntry:null,turnTimeLeft:0,player:{id:null,name:null,teamId:null,isReady:!1},font:null,entries:[]},getters:{isMaster:function(e){return e.master===e.player.id},master:function(e){return e.players[e.master]},shareableLink:function(e){return e.path?B(e.path):null},team:function(e){return e.teams[e.player.teamId]},players:function(e){return Object.values(e.players).filter((function(e){return e.name}))},canStart:function(e){return Object.values(e.players).every((function(e){return e.isReady&&e.teamId}))},myTurn:function(e){return e.activePlayer===e.player.id}},mutations:{addPlayer:function(e,t){r["a"].set(e.players,t.id,t)},setPlayerName:function(e,t){var n=t.id,r=t.name,a=e.players[n];a&&(a.name=r)},removePlayer:function(e,t){r["a"].delete(this.players,t)},updateMaster:function(e,t){e.master=t},setEntriesPerPlayer:function(e,t){e.entriesPerPlayer=t},setPlayerReady:function(e,t){var n=e.players[t];n&&(n.isReady=!0)},addTeam:function(e,t){r["a"].set(e.teams,t.id,t)},addPlayerToTeam:function(e,t){var n=t.id,r=t.teamId,a=e.players[n];a&&(a.teamId=r)},removeTeam:function(e,t){r["a"].delete(e.teams,t),Object.values(e.players).forEach((function(e){e.teamId===t&&(e.teamId=null)}))},setTurnTime:function(e,t){e.turnTime=t},startGame:function(e){e.isStarted=!0},startRound:function(e,t){var n=t.activeTeam,r=t.activePlayer,a=t.nextTeam,i=t.nextPlayer;e.activeTeam=n,e.activePlayer=r,e.nextTeam=a,e.nextPlayer=i,e.turnTimeLeft=e.turnTime,e.roundStarted=!0},startTurn:function(e){e.turnStarted=!0},nextEntry:function(e,t){e.activeEntry=t},updateTeamScore:function(e,t){var n=t.id,r=t.score,a=e.teams[n];a&&(a.score=r)},finishTurn:function(e){e.turnFinished=!0},nextTurn:function(e,t){var n=t.activeTeam,r=t.activePlayer,a=t.nextTeam,i=t.nextPlayer;e.activeTeam=n,e.activePlayer=r,e.nextTeam=a,e.nextPlayer=i,e.turnStarted=!1,e.turnFinished=!1,e.turnTimeLeft=e.turnTime},finishRound:function(e){e.roundFinished=!0},nextRound:function(e){e.roundStarted=!1,e.roundFinished=!1},finishGame:function(e){e.isFinished=!0},setName:function(e,t){e.player.name=t},setFont:function(e,t){e.font=t},addEntry:function(e,t){e.entries.push(t)}},actions:{newGame:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("newGame"));case 2:case"end":return t.stop()}}),t)})))()},setPlayerName:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,!t){n.next=6;break}return n.next=4,a(M("setPlayerName",t));case 4:r("setName",t),a("setFont",H());case 6:case"end":return n.stop()}}),n)})))()},removePlayer:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(M("removePlayer",t));case 3:r("removePlayer",t);case 4:case"end":return n.stop()}}),n)})))()},leaveGame:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("leaveGame"));case 2:case"end":return t.stop()}}),t)})))()},stayInCurrentGame:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.next=3,n(M("stayInCurrentGame"));case 3:r("stayInCurrentGame");case 4:case"end":return t.stop()}}),t)})))()},setFont:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,!t){n.next=5;break}return n.next=4,a(M("setFont",t));case 4:r("setFont",t);case 5:case"end":return n.stop()}}),n)})))()},setEntriesPerPlayer:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,!t){n.next=5;break}return n.next=4,a(M("setEntriesPerPlayer",t));case 4:r("setEntriesPerPlayer",t);case 5:case"end":return n.stop()}}),n)})))()},addEntry:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,!t){n.next=5;break}return n.next=4,a(M("addEntry",t));case 4:r("addEntry",t);case 5:case"end":return n.stop()}}),n)})))()},addTeam:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.dispatch,t&&r(M("addTeam",t));case 2:case"end":return n.stop()}}),n)})))()},addPlayerToTeam:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,i=t.id,o=t.teamId,!i||!o){n.next=6;break}return n.next=5,a(M("addPlayerToTeam",{id:i,teamId:o}));case 5:r("addPlayerToTeam",{id:i,teamId:o});case 6:case"end":return n.stop()}}),n)})))()},removeTeam:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(M("removeTeam",t));case 3:r("removeTeam",t);case 4:case"end":return n.stop()}}),n)})))()},setTurnTime:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,a=e.dispatch,!t){n.next=5;break}return n.next=4,a(M("setTurnTime",t));case 4:r("setTurnTime",t);case 5:case"end":return n.stop()}}),n)})))()},startGame:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("startGame"));case 2:case"end":return t.stop()}}),t)})))()},startRound:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("startRound"));case 2:case"end":return t.stop()}}),t)})))()},startTurn:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("startTurn"));case 2:case"end":return t.stop()}}),t)})))()},nextEntry:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("nextEntry"));case 2:case"end":return t.stop()}}),t)})))()},nextTurn:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("nextTurn"));case 2:case"end":return t.stop()}}),t)})))()},nextRound:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("nextRound"));case 2:case"end":return t.stop()}}),t)})))()},finishGame:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("finishGame"));case 2:case"end":return t.stop()}}),t)})))()},newGameFromCurrent:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(M("newGameFromCurrent"));case 2:case"end":return t.stop()}}),t)})))()}}};r["a"].use(c["a"]);var K=new c["a"].Store({state:{isLoaded:!1,showHelp:!1,requestToLeave:!1},mutations:{load:function(e,t){var n=t.userId,a=t.game;a?(e.game.path=a.path,window.location.href!==B(a.path)&&window.history.pushState(null,"","/"+a.path),a.players.forEach((function(t){r["a"].set(e.game.players,t.id,t)})),a.teams.forEach((function(t){r["a"].set(e.game.teams,t.id,t)})),e.game.master=a.master,e.game.entriesPerPlayer=a.entriesPerPlayer,e.game.isStarted=a.isStarted,e.game.isFinished=a.isFinished,e.game.turnTime=a.turnTime,e.game.scorePerEntry=a.scorePerEntry,e.game.roundStarted=a.roundStarted,e.game.roundFinished=a.roundFinished,e.game.activeTeam=a.activeTeam,e.game.activePlayer=a.activePlayer,e.game.nextTeam=a.nextTeam,e.game.nextPlayer=a.nextPlayer,e.game.turnStarted=a.turnStarted,e.game.turnFinished=a.turnFinished,e.game.activeEntry=a.activeEntry,e.game.turnTimeLeft=a.turnTimeLeft,e.game.player=e.game.players[n],e.game.font=a.font,e.game.entries=a.entries,e.game.isCreated=!0):e.game.player.id=n,e.isLoaded=!0},redirectToGame:function(e,t){window.location.href="/"+t},leaveGame:function(){window.location.href="/"},requestToLeave:function(e){e.requestToLeave=!0},stayInCurrentGame:function(e){e.requestToLeave=!1},toggleHelp:function(e){e.showHelp=!e.showHelp}},modules:{socket:I,game:z}}),$="https:"===window.location.protocol?"wss":"ws",q="".concat($,"://").concat(window.location.host,"/ws/");r["a"].use(i.a,q,{store:K,reconnection:!0,passToStoreHandler:function(e,t){if(e.startsWith("SOCKET_")){var n=e.toUpperCase(),r=t;if(t.data){var a=JSON.parse(t.data);n=a.type,r=a.payload}this.store.commit(n,r)}}}),r["a"].directive("focus",{inserted:function(e){e.focus()}}),r["a"].config.productionTip=!1,new r["a"]({store:K,render:function(e){return e(G)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"67e9":function(e,t,n){},"9c0c":function(e,t,n){},d75e:function(e,t,n){},f03f:function(e,t,n){"use strict";var r=n("d75e"),a=n.n(r);a.a}});
//# sourceMappingURL=app.eed4f7c5.js.map