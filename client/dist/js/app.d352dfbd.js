(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],m=0,d=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0006":function(e,t,n){"use strict";var r=n("02f7"),a=n.n(r);a.a},"02f7":function(e,t,n){},"170b":function(e,t,n){},"21a6":function(e,t,n){"use strict";var r=n("170b"),a=n.n(r);a.a},"2a64":function(e,t,n){"use strict";var r=n("9623"),a=n.n(r);a.a},"2c51":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("99af"),n("2ca0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("b408"),i=n.n(a),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelpButton"),e.showHelp?n("Help"):e.isLoaded?n("div",[e.gameStarted?n("Game"):e.gameCreated?n("Setup"):n("Home")],1):n("HomeCube",[n("SpinnerLoader",{staticClass:"centerHome",attrs:{color:"#344558"}})],1)],1)},o=[],u=n("2f62"),c=n("d1ad"),l=n.n(c),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{click:e.toggleHelp}},[n("div",{staticClass:"infoCorner"}),n("div",{staticClass:"infoCornerBottomLeft"})])},d=[],f={name:"HelpButton",methods:Object(u["d"])(["toggleHelp"])},p=f,v=(n("21a6"),n("2877")),y=Object(v["a"])(p,m,d,!1,null,"33a5cc7e",null),h=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"homeCubeDropShadow"}),n("div",{staticClass:"homeCube"},[e._t("default")],2)])},T=[],b={name:"HomeCube"},P=b,_=(n("0006"),Object(v["a"])(P,g,T,!1,null,"edab2782",null)),w=_.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isFinished?n("Finished"):n("div",[e.roundStarted?e.roundFinished?n("RoundFinished"):n("div",[e.myTurn?n("MyTurn"):n("NotMyTurn")],1):n("RoundSetup")],1)},O=[],x=n("5530"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[n("div",{staticClass:"generalFont"},[n("h3",[e._v("Eindstand:")]),n("ul",e._l(e.rankings,(function(t){return n("li",{key:t.id},[n("div",{staticClass:"generalFont"},[e._v(" "+e._s(t.name)+": "+e._s(t.score)+" ")])])})),0),e.isMaster?n("button",{staticClass:"generalFont transparentButton",on:{click:function(t){return e.newGameFromCurrent()}}},[e._v("Nieuw spel met dezelfde spelers")]):e._e(),n("br"),n("button",{staticClass:"generalFont transparentButton",on:{click:function(t){return e.leaveGame()}}},[e._v("Verlaat het spel")])])])},j=[],F={name:"Finished",components:{HomeCube:w},computed:Object(u["c"])(["isMaster","rankings"]),methods:Object(u["b"])(["newGameFromCurrent","leaveGame"])},S=F,k=Object(v["a"])(S,N,j,!1,null,"6314645e",null),E=k.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[e.isStarted?e.isFinished?n("div",{staticClass:"generalFont"},[e._v(" Je beurt is voorbij!"),n("br"),e._v(" Behaalde score: "+e._s(e.scoreThisTurn)),n("br"),e._v(" Volgende speler: "+e._s(e.nextPlayerName)+" ("+e._s(e.nextTeamName)+") "),n("button",{staticClass:"centerHome generalFont transparentButton nextTurnButton",on:{click:e.nextTurn}},[e._v("Geef de beurt door")])]):n("div",[e.entry?n("div",[n("button",{staticClass:"centerHome generalFont transparentButton entryButton",on:{click:e.nextEntry}},[n("span",[e._v(e._s(e.entry.text))])])]):e._e(),n("Timer")],1):n("div",{staticClass:"generalFont"},[e._v(" De beurt is aan jou! "),n("button",{staticClass:"centerHome generalFont transparentButton startTurnButton",on:{click:e.startTurn}},[e._v("Start je beurt")])])])},H=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"generalFont timer"},[e._v(" "+e._s(e.turnTimeLeft)+" ")])},B=[],L=(n("d3b7"),n("25f0"),n("4d90"),{name:"Timer",computed:Object(u["e"])({turnTimeLeft:function(e){var t=e.game.turnTimeLeft,n=Math.floor(t/60),r=t-60*n;return n+":"+r.toString().padStart(2,"0")}})}),G=L,M=(n("5e68"),Object(v["a"])(G,I,B,!1,null,"62a0984e",null)),$=M.exports,z={name:"MyTurn",components:{HomeCube:w,Timer:$},computed:Object(x["a"])({},Object(u["e"])({isStarted:function(e){return e.game.turnStarted},isFinished:function(e){return e.game.turnFinished},entry:function(e){return e.game.activeEntry},scoreThisTurn:function(e){return e.game.scoreThisTurn}}),{},Object(u["c"])(["activePlayerName","nextPlayerName","activeTeamName","nextTeamName"])),methods:Object(u["b"])(["startTurn","nextEntry","nextTurn"])},A=z,V=(n("dbfe"),Object(v["a"])(A,R,H,!1,null,"6ea43017",null)),K=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[e.isFinished?n("div",{staticClass:"generalFont"},[e._v(" De beurt is voorbij!"),n("br"),e._v(" Behaalde score: "+e._s(e.scoreThisTurn)),n("br"),e._v(" Volgende speler: "+e._s(e.nextPlayerName)+" ("+e._s(e.nextTeamName)+") ")]):n("div",[n("span",{staticClass:"generalFont centerHome"},[e._v(" De beurt is aan "+e._s(e.activePlayerName)+" ("+e._s(e.activeTeamName)+")! ")]),e.isStarted?n("Timer"):e._e()],1)])},D=[],W={name:"NotMyTurn",components:{HomeCube:w,Timer:$},computed:Object(x["a"])({},Object(u["e"])({isStarted:function(e){return e.game.turnStarted},isFinished:function(e){return e.game.turnFinished}}),{},Object(u["c"])(["activePlayerName","nextPlayerName","activeTeamName","nextTeamName"]))},q=W,U=Object(v["a"])(q,J,D,!1,null,"1e4c7332",null),Q=U.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[n("div",{staticClass:"generalFont"},[e._v(" Ronde voorbij!"),n("br"),e._v(" Scores:"),n("br")]),n("ul",e._l(e.teams,(function(t){return n("li",{key:t.id,staticClass:"generalFont"},[e._v(" "+e._s(t.name)+": "+e._s(t.scoreThisRound)+" (totaal: "+e._s(t.score)+") ")])})),0),n("br"),e.isMaster?n("div",[n("button",{staticClass:"generalFont transparentButton",on:{click:e.nextRound}},[e._v("Speel nog een ronde")]),n("br"),n("button",{staticClass:"generalFont transparentButton",on:{click:e.finishGame}},[e._v("Spel afronden")])]):e._e()])},Y=[],Z={name:"RoundFinished",components:{HomeCube:w},computed:Object(x["a"])({},Object(u["e"])({teams:function(e){return e.game.teams}}),{},Object(u["c"])(["isMaster"])),methods:Object(u["b"])(["nextRound","finishGame"])},ee=Z,te=Object(v["a"])(ee,X,Y,!1,null,"6ca81d23",null),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isMaster?n("div",[e.turnTimeSet?n("div",[n("HomeCube",[n("button",{staticClass:"centerHome generalFont transparentButton startRoundButton",on:{click:e.startRound}},[e._v("Start ronde")])])],1):n("div",[n("Setup")],1)]):n("div",{staticClass:"generalFont"},[n("HomeCube",[e._v(" Wachten tot de ronde start... ")])],1)},ae=[],ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[e.gameStarted?e._e():n("div",[e.shareableLink&&e.isMaster?n("div",{staticClass:"generalFont spelLink linkPosition"},[e._v(e._s(e.shareableLink))]):e._e(),n("br"),n("br")]),e.playerNameSet?!e.entriesPerPlayerSet&&e.isMaster?n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmEntriesPerPlayer()}}},[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"entriesPerPlayer"}},[e._v("Aantal briefjes per speler:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entriesPerPlayer,expression:"entriesPerPlayer"},{name:"focus",rawName:"v-focus"}],ref:"entriesPerPlayer",staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"entriesPerPlayer",type:"number",min:"1",max:"9",autocomplete:"off"},domProps:{value:e.entriesPerPlayer},on:{input:function(t){t.target.composing||(e.entriesPerPlayer=t.target.value)}}}),e.errors.entriesPerPlayer?n("div",{staticClass:"generalFont error"},[e._v("Vul een getal in tussen de 1 en de 9")]):e._e(),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.confirmEntriesPerPlayer()}}},[e._v("»")])]):e.enoughEntries?!e.teamsConfirmed&&e.isMaster?n("SetupTeams",{ref:"setupTeams"}):!e.turnTimeSet&&e.isMaster?n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmTurnTime()}}},[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"turnTime"}},[e._v("Aantal seconde per beurt:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.turnTime,expression:"turnTime"},{name:"focus",rawName:"v-focus"}],ref:"turnTime",staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"turnTime",type:"number",min:"5",step:"5",max:"600",autocomplete:"off"},domProps:{value:e.turnTime},on:{input:function(t){t.target.composing||(e.turnTime=t.target.value)}}}),e.errors.turnTime?n("div",{staticClass:"generalFont error"},[e._v("Vul een getal in tussen de 5 en de 600")]):e._e(),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.confirmTurnTime()}}},[e._v("»")])]):e.canStart?e.isMaster?n("div",[n("button",{staticClass:"generalFont spelOpzetNaam centerTextInput",on:{click:e.startGame}},[e._v("Start")])]):n("div",{staticClass:"generalFont spelOpzetBriefjes centerTextInput"},[e._v(" Wachten tot het spel begint... ")]):n("div",{staticClass:"generalFont spelOpzetBriefjes centerTextInput"},[e._v(" Wachten tot het spel kan beginnen... ")]):n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmEntry()}}},[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"entry"}},[e._v(" Vul "),e.firstEntryAdded?n("span",[e._v("nog ")]):e._e(),e._v("een briefje in ("+e._s(e.nrEntries+1)+"/"+e._s(e.ofTotalEntries)+"): ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.entry,expression:"entry"},{name:"focus",rawName:"v-focus"}],ref:"entry",staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"entry",type:"text",autocomplete:"off"},domProps:{value:e.entry},on:{input:function(t){t.target.composing||(e.entry=t.target.value)}}}),e.errors.entry?n("div",{staticClass:"generalFont error"},[e._v("Het briefje mag niet leeg zijn")]):e._e(),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.confirmEntry()}}},[e._v("»")])]):n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmPlayerName()}}},[n("label",{staticClass:"generalFont spelOpzetBriefjes labelPosition",attrs:{for:"playerName"}},[e._v("Vul je naam in:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"},{name:"focus",rawName:"v-focus"}],ref:"playerName",staticClass:"generalFont spelOpzetNaam centerTextInput",staticStyle:{color:"#688980"},attrs:{id:"playerName",type:"text",autocomplete:"off"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),e.errors.playerName?n("div",{staticClass:"generalFont error"},[e._v("Je naam moet minimaal 2 tekens bevatten")]):e._e(),n("button",{staticClass:"generalFont spelOpzetNaam transparentButton nextButton",on:{click:function(t){return e.confirmPlayerName()}}},[e._v("»")])])],1)},se=[],oe=(n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.editing?n("div",[n("h4",{staticClass:"generalFont teamLabel teamName"},[e._v("Spelers "+e._s(e.teams[e.editing].name)+":")]),n("ul",{staticClass:"teamList"},e._l(e.players,(function(t){return n("li",{key:t.id,staticClass:"teamItem"},[n("div",{staticClass:"generalFont teamItemName"},[e._v(" "+e._s(t.name)+" "),t.teamId?n("span",[e._v("("+e._s(e.teams[t.teamId].name)+")")]):e._e()]),t.teamId===e.editing?n("div",{staticClass:"listButton"},[n("button",{staticClass:"generalFont transparentButton",on:{click:function(n){return e.removePlayerFromTeam({id:t.id,teamId:e.editing})}}},[e._v("x")])]):n("div",{staticClass:"listButton"},[n("button",{staticClass:"generalFont transparentButton",on:{click:function(n){return e.addPlayerToTeam({id:t.id,teamId:e.editing})}}},[e._v("+")])])])})),0),n("div",[n("button",{staticClass:"generalFont transparentButton nextButton",on:{click:function(t){return e.stopEditing()}}},[e._v("»")])])]):n("div",[n("div",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.confirmTeamName()}}},[n("label",{staticClass:"generalFont teamLabel teamName",attrs:{for:"teamName"}},[e._v("Voeg team toe:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"},{name:"focus",rawName:"v-focus"}],staticClass:"generalFont teamNameInput teamName",staticStyle:{color:"#688980"},attrs:{id:"teamName",type:"text",autocomplete:"off"},domProps:{value:e.teamName},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}}),e.errors.teamName?n("div",{staticClass:"generalFont errorTeamName"},[e._v("Teamnaam mag niet leeg zijn")]):e._e(),n("button",{staticClass:"generalFont transparentButton teamNameButton teamName",on:{click:function(t){return e.confirmTeamName()}}},[e._v("»")])]),n("ul",{staticClass:"teamList"},e._l(e.teams,(function(t){return n("li",{key:t.id,staticClass:"teamItem"},[n("div",{staticClass:"generalFont teamItemName"},[e._v(" "+e._s(t.name)+" ("+e._s(e.playersForTeam(t.id).length)+" speler"),1!==e.playersForTeam(t.id).length?n("span",[e._v("s")]):e._e(),e._v(") ")]),n("div",{staticClass:"listButton"},[n("button",{staticClass:"generalFont transparentButton",on:{click:function(n){return e.removeTeam(t.id)}}},[e._v("x")])]),n("div",{staticClass:"listButton"},[n("button",{staticClass:"generalFont transparentButton",on:{click:function(n){return e.editTeam(t.id)}}},[e._v("»")])])])})),0),e.allPlayersAssigned&&e.allTeamsHaveEnoughPlayers?n("div",[n("button",{staticClass:"generalFont transparentButton nextButton",on:{click:function(t){return e.confirmTeams()}}},[e._v("»")])]):e._e()])])}),ue=[],ce=n("2909"),le={name:"SetupTeams",components:{},data:function(){return{teamName:"",editing:null,errors:{teamName:!1}}},computed:Object(x["a"])({},Object(u["e"])({teams:function(e){return e.game.teams}}),{},Object(u["c"])(["playersForTeam","playersNotInTeam","allPlayersAssigned","allTeamsHaveEnoughPlayers"]),{players:function(){return[].concat(Object(ce["a"])(this.playersForTeam(this.editing)),Object(ce["a"])(this.playersNotInTeam(this.editing)))}}),methods:Object(x["a"])({confirmTeamName:function(){this.teamName.length>0?(this.addTeam(this.teamName),this.teamName="",this.errors.teamName=!1):this.errors.teamName=!0},editTeam:function(e){this.editing=e},stopEditing:function(){this.editing=null}},Object(u["d"])(["confirmTeams"]),{},Object(u["b"])(["addTeam","addPlayerToTeam","removePlayerFromTeam","removeTeam"]))},me=le,de=(n("b20f"),Object(v["a"])(me,oe,ue,!1,null,"765cf340",null)),fe=de.exports,pe={name:"Setup",components:{HomeCube:w,SetupTeams:fe},data:function(){return{playerName:"",entriesPerPlayer:4,entry:"",firstEntryAdded:!1,turnTime:60,errors:{playerName:!1,entriesPerPlayer:!1,entry:!1,turnTime:!1}}},mounted:function(){this.turnTime=this.previousTurnTime||this.turnTime},computed:Object(x["a"])({},Object(u["e"])({nrEntries:function(e){return e.game.entries.length},ofTotalEntries:function(e){return e.game.entriesPerPlayer},teamsConfirmed:function(e){return e.game.teamsConfirmed},previousTurnTime:function(e){return e.game.previousTurnTime},gameStarted:function(e){return e.game.isStarted}}),{},Object(u["c"])(["isMaster","shareableLink","playerNameSet","entriesPerPlayerSet","enoughEntries","turnTimeSet","canStart"])),methods:Object(x["a"])({confirmPlayerName:function(){this.playerName.length>=2?(this.setPlayerName(this.playerName),this.errors.playerName=!1,this.isMaster?this.$refs.entriesPerPlayer.focus():this.$refs.entry.focus()):this.errors.playerName=!0},confirmEntriesPerPlayer:function(){var e=parseInt(this.entriesPerPlayer);e>0&&e<=9?(this.setEntriesPerPlayer(e),this.errors.entriesPerPlayer=!1,this.$refs.entry.focus()):this.errors.entriesPerPlayer=!0},confirmEntry:function(){var e=this;this.entry.length>0?this.addEntry(this.entry).then((function(){e.entry="",e.firstEntryAdded=!0,e.errors.entry=!1})):this.errors.entry=!0},confirmTurnTime:function(){var e=parseInt(this.turnTime);e>0&&e<=600?(this.setTurnTime(this.turnTime),this.errors.turnTime=!1):this.errors.turnTime=!0}},Object(u["b"])(["setPlayerName","setEntriesPerPlayer","startGame","addEntry","setTurnTime"]))},ve=pe,ye=(n("2a64"),Object(v["a"])(ve,ie,se,!1,null,"15fb534b",null)),he=ye.exports,ge={name:"RoundSetup",components:{Setup:he,HomeCube:w},computed:Object(u["c"])(["turnTimeSet","isMaster"]),methods:Object(u["b"])(["startRound"])},Te=ge,be=(n("7191"),Object(v["a"])(Te,re,ae,!1,null,"559d6e6e",null)),Pe=be.exports,_e={name:"Game",components:{HomeCube:w,Finished:E,MyTurn:K,NotMyTurn:Q,RoundFinished:ne,RoundSetup:Pe},computed:Object(x["a"])({},Object(u["e"])({isFinished:function(e){return e.game.isFinished},roundStarted:function(e){return e.game.roundStarted},roundFinished:function(e){return e.game.roundFinished}}),{},Object(u["c"])(["myTurn"]))},we=_e,Ce=Object(v["a"])(we,C,O,!1,null,"10073b91",null),Oe=Ce.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[n("div",{staticClass:"generalFont helpText"},[e._v(" Dit is een online tool ter ondersteuning om het briefjesspel via Skype te kunnen spelen! ")])])},Ne=[],je={name:"Help",components:{HomeCube:w}},Fe=je,Se=(n("5d53"),Object(v["a"])(Fe,xe,Ne,!1,null,"34825f1a",null)),ke=Se.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HomeCube",[n("button",{staticClass:"centerHome generalFont nieuwSpel transparentButton",on:{click:e.newGame}},[e._v("NIEUW SPEL")])])},Re=[],He={name:"Home",components:{HomeCube:w},methods:Object(u["b"])(["newGame"])},Ie=He,Be=(n("ee07"),Object(v["a"])(Ie,Ee,Re,!1,null,"4bbea606",null)),Le=Be.exports,Ge={name:"App",components:{SpinnerLoader:l.a,HelpButton:h,HomeCube:w,Game:Oe,Help:ke,Home:Le,Setup:he},computed:Object(u["e"])({isLoaded:function(e){return e.isLoaded},showHelp:function(e){return e.showHelp},gameCreated:function(e){return e.game.isCreated},gameStarted:function(e){return e.game.isStarted}})},Me=Ge,$e=(n("5c0b"),Object(v["a"])(Me,s,o,!1,null,null,null)),ze=$e.exports,Ae=(n("4160"),n("159b"),n("96cf"),n("1da1")),Ve={state:{isConnected:!1,reconnectError:!1},mutations:{SOCKET_ONOPEN:function(e,t){r["a"].prototype.$socket=t.currentTarget,e.isConnected=!0},SOCKET_ONCLOSE:function(e,t){e.isConnected=!1},SOCKET_ONERROR:function(e,t){console.error(e,t)},SOCKET_ONMESSAGE:function(e,t){console.info(t)},SOCKET_RECONNECT:function(e,t){console.debug(e,t)},SOCKET_RECONNECT_ERROR:function(e){e.reconnectError=!0}},actions:{sendMessage:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.state,i=t.messageType,s=t.payload,a.isConnected){n.next=4;break}throw new Error("Not connected; could not send message "+i);case 4:r["a"].prototype.$socket.send(JSON.stringify({type:i,payload:s}));case 5:case"end":return n.stop()}}),n)})))()}}},Ke=(n("a623"),n("4de4"),n("b0c0"),n("07ac"),function(e,t){return{messageType:e,payload:t,type:"sendMessage"}}),Je=function(){return"Capone Light"},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=window.location.protocol,n=window.location.host;return"localhost:8080"===n&&(n="localhost:4000"),"".concat(t,"//").concat(n,"/").concat(e)},We=function(e,t){return e.score>t.score?-1:e.score<t.score?1:0},qe={state:{isCreated:!1,path:null,players:{},teams:{},master:null,entriesPerPlayer:0,teamsConfirmed:!1,isStarted:!1,isFinished:!1,turnTime:0,previousTurnTime:0,scorePerEntry:1,roundStarted:!1,roundFinished:!1,activeTeam:null,activePlayer:null,nextTeam:null,nextPlayer:null,turnStarted:!1,turnFinished:!1,activeEntry:null,turnTimeLeft:0,timer:null,scoreThisTurn:0,player:{id:null,name:null,teamId:null,isReady:!1},font:null,entries:[]},getters:{isMaster:function(e){return e.master===e.player.id},master:function(e){return e.players[e.master]},shareableLink:function(e){return e.path?De(e.path):null},playerNameSet:function(e){return!!e.player.name},entriesPerPlayerSet:function(e){return!!e.entriesPerPlayer},enoughEntries:function(e){return e.entries.length>=e.entriesPerPlayer},turnTimeSet:function(e){return!!e.turnTime},team:function(e){return e.teams[e.player.teamId]},players:function(e){return Object.values(e.players).filter((function(e){return e.name}))},playersForTeam:function(e){return function(t){return Object.values(e.players).filter((function(e){return e.teamId===t}))}},playersNotInTeam:function(e){return function(t){return Object.values(e.players).filter((function(e){return e.teamId!==t}))}},allPlayersReady:function(e){return Object.values(e.players).every((function(e){return e.isReady}))},allPlayersAssigned:function(e){return Object.values(e.players).every((function(e){return e.teamId}))},allTeamsHaveEnoughPlayers:function(e,t){return Object.values(e.teams).every((function(e){return t.playersForTeam(e.id).length>=2}))},canStart:function(e,t){return t.allPlayersReady&&t.allPlayersAssigned&&t.allTeamsHaveEnoughPlayers},myTurn:function(e){return e.activePlayer===e.player.id},activePlayerName:function(e){var t=e.players[e.activePlayer];return t?t.name:null},nextPlayerName:function(e){var t=e.players[e.nextPlayer];return t?t.name:null},activeTeamName:function(e){var t=e.teams[e.activeTeam];return t?t.name:null},nextTeamName:function(e){var t=e.teams[e.nextTeam];return t?t.name:null},rankings:function(e){return Object.values(e.teams).sort(We)}},mutations:{addPlayer:function(e,t){r["a"].set(e.players,t.id,t)},setPlayerName:function(e,t){var n=t.id,r=t.name,a=e.players[n];a&&(a.name=r)},removePlayer:function(e,t){r["a"].delete(this.players,t)},updateMaster:function(e,t){e.master=t},setEntriesPerPlayer:function(e,t){e.entriesPerPlayer=t},setPlayerReady:function(e,t){var n=e.players[t];n&&(n.isReady=!0)},addTeam:function(e,t){r["a"].set(e.teams,t.id,t)},addPlayerToTeam:function(e,t){var n=t.id,r=t.teamId,a=e.players[n];a&&(a.teamId=r)},removePlayerFromTeam:function(e,t){var n=t.id,r=t.teamId,a=e.players[n];a&&a.teamId===r&&(a.teamId=null)},removeTeam:function(e,t){r["a"].delete(e.teams,t),Object.values(e.players).forEach((function(e){e.teamId===t&&(e.teamId=null)}))},confirmTeams:function(e){e.teamsConfirmed=!0},setTurnTime:function(e,t){e.turnTime=t},startGame:function(e){e.isStarted=!0},startRound:function(e,t){var n=t.activeTeam,r=t.activePlayer,a=t.nextTeam,i=t.nextPlayer;e.activeTeam=n,e.activePlayer=r,e.nextTeam=a,e.nextPlayer=i,e.turnTimeLeft=e.turnTime,e.roundStarted=!0},startTurn:function(e){e.timer=setInterval((function(){e.turnTimeLeft--,e.turnTimeLeft<=0&&clearInterval(e.timer)}),1e3),e.turnStarted=!0},nextEntry:function(e,t){var n=t.text,r=t.font;e.activeEntry={text:n,font:r}},updateTeamScore:function(e,t){var n=t.id,r=t.score,a=t.scoreThisRound,i=t.scoreThisTurn;e.scoreThisTurn=i;var s=e.teams[n];s&&(s.score=r,s.scoreThisRound=a)},finishTurn:function(e){e.turnFinished=!0},nextTurn:function(e,t){var n=t.activeTeam,r=t.activePlayer,a=t.nextTeam,i=t.nextPlayer;e.activeTeam=n,e.activePlayer=r,e.nextTeam=a,e.nextPlayer=i,e.turnStarted=!1,e.turnFinished=!1,e.turnTimeLeft=e.turnTime,e.scoreThisTurn=0},finishRound:function(e){clearInterval(e.timer),e.roundFinished=!0},nextRound:function(e){e.roundStarted=!1,e.roundFinished=!1,e.turnStarted=!1,e.scoreThisTurn=0,e.previousTurnTime=e.turnTime,e.turnTime=0,Object.values(e.teams).forEach((function(e){e.scoreThisRound=0}))},finishGame:function(e){e.isFinished=!0},setName:function(e,t){e.player.name=t},setFont:function(e,t){e.font=t},addEntry:function(e,t){e.entries.push(t)}},actions:{newGame:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("newGame"));case 2:case"end":return t.stop()}}),t)})))()},setPlayerName:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("setPlayerName",t));case 3:r("setName",t),a("setFont",Je());case 5:case"end":return n.stop()}}),n)})))()},removePlayer:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("removePlayer",t));case 3:r("removePlayer",t);case 4:case"end":return n.stop()}}),n)})))()},leaveGame:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("leaveGame"));case 2:case"end":return t.stop()}}),t)})))()},stayInCurrentGame:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,r=e.commit,t.next=3,n(Ke("stayInCurrentGame"));case 3:r("stayInCurrentGame");case 4:case"end":return t.stop()}}),t)})))()},setFont:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("setFont",t));case 3:r("setFont",t);case 4:case"end":return n.stop()}}),n)})))()},setEntriesPerPlayer:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("setEntriesPerPlayer",t));case 3:r("setEntriesPerPlayer",t);case 4:case"end":return n.stop()}}),n)})))()},addEntry:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("addEntry",t));case 3:r("addEntry",t);case 4:case"end":return n.stop()}}),n)})))()},addTeam:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.dispatch,r(Ke("addTeam",t));case 2:case"end":return n.stop()}}),n)})))()},addPlayerToTeam:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,i=t.id,s=t.teamId,n.next=4,a(Ke("addPlayerToTeam",{id:i,teamId:s}));case 4:r("addPlayerToTeam",{id:i,teamId:s});case 5:case"end":return n.stop()}}),n)})))()},removePlayerFromTeam:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,i=t.id,s=t.teamId,n.next=4,a(Ke("removePlayerFromTeam",{id:i,teamId:s}));case 4:r("removePlayerFromTeam",{id:i,teamId:s});case 5:case"end":return n.stop()}}),n)})))()},removeTeam:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("removeTeam",t));case 3:r("removeTeam",t);case 4:case"end":return n.stop()}}),n)})))()},setTurnTime:function(e,t){return Object(Ae["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.next=3,a(Ke("setTurnTime",t));case 3:r("setTurnTime",t);case 4:case"end":return n.stop()}}),n)})))()},startGame:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("startGame"));case 2:case"end":return t.stop()}}),t)})))()},startRound:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("startRound"));case 2:case"end":return t.stop()}}),t)})))()},startTurn:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("startTurn"));case 2:case"end":return t.stop()}}),t)})))()},nextEntry:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("nextEntry"));case 2:case"end":return t.stop()}}),t)})))()},nextTurn:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("nextTurn"));case 2:case"end":return t.stop()}}),t)})))()},nextRound:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("nextRound"));case 2:case"end":return t.stop()}}),t)})))()},finishGame:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("finishGame"));case 2:case"end":return t.stop()}}),t)})))()},newGameFromCurrent:function(e){return Object(Ae["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dispatch,n(Ke("newGameFromCurrent"));case 2:case"end":return t.stop()}}),t)})))()}}};r["a"].use(u["a"]);var Ue=new u["a"].Store({state:{isLoaded:!1,showHelp:!1,requestToLeave:!1},mutations:{load:function(e,t){var n=t.userId,a=t.game;a?(e.game.path=a.path,window.location.href!==De(a.path)&&window.history.pushState(null,"","/"+a.path),e.game.players={},a.players.forEach((function(t){r["a"].set(e.game.players,t.id,t)})),e.game.teams={},a.teams.forEach((function(t){r["a"].set(e.game.teams,t.id,t)})),e.game.master=a.master,e.game.entriesPerPlayer=a.entriesPerPlayer,e.game.teamsConfirmed=a.isStarted,e.game.isStarted=a.isStarted,e.game.isFinished=a.isFinished,e.game.turnTime=a.turnTime,e.game.scorePerEntry=a.scorePerEntry,e.game.roundStarted=a.roundStarted,e.game.roundFinished=a.roundFinished,e.game.activeTeam=a.activeTeam,e.game.activePlayer=a.activePlayer,e.game.nextTeam=a.nextTeam,e.game.nextPlayer=a.nextPlayer,e.game.turnStarted=a.turnStarted,e.game.turnFinished=a.turnFinished,e.game.activeEntry=a.activeEntry,e.game.turnTimeLeft=a.turnTimeLeft,e.game.scoreThisTurn=a.scoreThisTurn,e.game.player=e.game.players[n],e.game.font=a.font,e.game.entries=a.entries,e.game.isCreated=!0):(e.game.player.id=n,window.location.href!==De()&&window.history.pushState(null,"","/")),e.isLoaded=!0},requestToLeave:function(e){e.requestToLeave=!0},leaveGame:function(){window.location.href="/"},redirectToGame:function(e,t){window.location.href="/"+t},stayInCurrentGame:function(e){e.requestToLeave=!1},toggleHelp:function(e){e.showHelp=!e.showHelp}},modules:{socket:Ve,game:qe}}),Qe="https:"===window.location.protocol?"wss":"ws",Xe="".concat(Qe,"://").concat(window.location.host,"/ws/");r["a"].use(i.a,Xe,{store:Ue,reconnection:!0,passToStoreHandler:function(e,t){if(e.startsWith("SOCKET_")){var n=e.toUpperCase(),r=t;if(t.data){var a=JSON.parse(t.data);n=a.type,r=a.payload}this.store.commit(n,r)}}}),r["a"].directive("focus",{inserted:function(e){e.focus()}}),r["a"].config.productionTip=!1,new r["a"]({store:Ue,render:function(e){return e(ze)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5d53":function(e,t,n){"use strict";var r=n("7af7"),a=n.n(r);a.a},"5e68":function(e,t,n){"use strict";var r=n("dece"),a=n.n(r);a.a},7191:function(e,t,n){"use strict";var r=n("8a50"),a=n.n(r);a.a},"7af7":function(e,t,n){},"8a50":function(e,t,n){},9623:function(e,t,n){},"9c0c":function(e,t,n){},b20f:function(e,t,n){"use strict";var r=n("fdd0"),a=n.n(r);a.a},dbfe:function(e,t,n){"use strict";var r=n("2c51"),a=n.n(r);a.a},dece:function(e,t,n){},ee07:function(e,t,n){"use strict";var r=n("f470"),a=n.n(r);a.a},f470:function(e,t,n){},fdd0:function(e,t,n){}});
//# sourceMappingURL=app.d352dfbd.js.map