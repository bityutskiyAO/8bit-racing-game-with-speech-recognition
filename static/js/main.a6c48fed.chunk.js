(this.webpackJsonppixi_8bit_racing=this.webpackJsonppixi_8bit_racing||[]).push([[0],{285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},296:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},304:function(e,t){},305:function(e,t){},313:function(e,t){},314:function(e,t){},315:function(e,t){},319:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"enemyCar",(function(){return l})),n.d(a,"gameCar",(function(){return u})),n.d(a,"road",(function(){return h})),n.d(a,"reward",(function(){return m})),n.d(a,"tree",(function(){return f})),n.d(a,"npm",(function(){return p})),n.d(a,"pixi",(function(){return j})),n.d(a,"tf",(function(){return g})),n.d(a,"react",(function(){return b})),n.d(a,"github",(function(){return v})),n.d(a,"vk",(function(){return w})),n.d(a,"insta",(function(){return x})),n.d(a,"keyBoardArrows",(function(){return O}));var i=n(22),r=n(43),c=n.n(r),s=n(236),o=n.n(s),d=(n(285),n(6)),l=n.p+"static/media/enemyCar.120d001c.png",u=n.p+"static/media/myCar.ebc799fd.png",h=n.p+"static/media/8bit-road.b23dcd4f.png",m=n.p+"static/media/reward.f6fccba0.png",f=n.p+"static/media/tree-8bit.842fadc3.png",p=n.p+"static/media/npm.e6f64ab2.svg",j=n.p+"static/media/pixi.3119a835.svg",g=n.p+"static/media/tf.d4a01935.svg",b=n.p+"static/media/react.928f956d.svg",v=n.p+"static/media/github.fa0212fe.svg",w=n.p+"static/media/vk.e9c609fb.svg",x=n.p+"static/media/instagram.53626cb1.svg",O=n.p+"static/media/keyboard-arrows.528a7946.png",C=(n(286),function(e){var t=e.stopTimer,n=e.gameDuration,a=e.gameReward,c=void 0===a?0:a,s=Object(r.useRef)(null),o=Object(r.useRef)(null),d=Object(r.useRef)(null),l=Object(r.useRef)(null),u=function(e,t){e.current&&Number(e.current.innerText)!==t&&(e.current.innerText=t>10?t:"0".concat(t))};return Object(r.useEffect)((function(){var e=0,a=0,i=0,r=0,c=setInterval((function(){1e3===(r+=1)&&(r=0,i++),60===i&&(i=0,a++),60===a&&(a=0,e++),u(s,e),u(o,a),u(d,i),u(l,r)}),1);return t&&(clearInterval(c),n((function(){return"".concat(s.current.innerText,":").concat(o.current.innerText,":").concat(d.current.innerText,":").concat(l.current.innerText)}))),function(){clearInterval(c)}}),[t]),Object(i.jsxs)("div",{className:"game-status-bar",children:[Object(i.jsxs)("div",{className:"game-reward",children:[Object(i.jsx)("img",{src:m,width:80,alt:"reward",height:50}),Object(i.jsx)("span",{children:c})]}),Object(i.jsxs)("div",{className:"timer-container",children:[Object(i.jsx)("span",{ref:s,children:"00"}),":",Object(i.jsx)("span",{ref:o,children:"00"}),":",Object(i.jsx)("span",{ref:d,children:"00"}),":",Object(i.jsx)("span",{ref:l,children:"000"})]})]})}),k=(n(287),function(e){var t=e.isTextNeed,n=e.infoTitle,a=e.infoLinks;return Object(i.jsxs)("div",{className:"game-description-container",children:[t&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"game-description-title",children:"8-bit Racing v0.0.1"}),Object(i.jsxs)("div",{className:"game-description-rules",children:[Object(i.jsx)("p",{children:Object(i.jsx)("strong",{children:"How to play:"})}),Object(i.jsxs)("p",{children:["If you turn on speech recognition use voice commands - ",Object(i.jsx)("strong",{children:"'UP'"}),", ",Object(i.jsx)("strong",{children:"'LEFT''"}),", ",Object(i.jsx)("strong",{children:"'RIGHT'"}),", ",Object(i.jsx)("strong",{children:"'DOWN',"})," ",Object(i.jsx)("strong",{children:"'STOP' "}),"- for controlling your car."]}),Object(i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(i.jsx)("p",{children:"Else opportunity, use default keyboards arrow keys"}),Object(i.jsx)("img",{src:O,alt:"arrow-keys",width:64,height:64})]})]})]}),Object(i.jsx)("strong",{}),"      ",Object(i.jsx)("div",{className:"game-description-links",children:Object(i.jsx)(U,{title:n,imgLinks:a})})]})}),y=(n(288),function(e){var t=e.onRestartGameClick,n=e.finalTime,a=e.gameReward;return Object(i.jsxs)("div",{className:"game-over-alert",children:[Object(i.jsx)("p",{className:"game-over-header",children:" GAME OVER "}),Object(i.jsxs)("div",{className:"game-info",children:[Object(i.jsx)("img",{src:m,width:80,alt:"reward",height:50}),Object(i.jsx)("span",{children:a}),Object(i.jsx)("p",{children:n})]}),Object(i.jsx)(K,{id:"resetBtn",classNames:"reset-btn",handleButtonOnClick:t,title:"Restart"})]})}),R=(n(289),function(e){var t=e.onInitButtonClick,n=Object(r.useState)(!1),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useRef)(null),l=function(e){t("enableButton"===e.target.id),s(!0)};return Object(i.jsxs)("div",{className:"start-game-container",onKeyUp:function(e){console.log(e.code),"Enter"===e.code&&o.current.click()},tabIndex:"0",children:[Object(i.jsxs)("div",{className:"game-container-1",children:[Object(i.jsx)("h1",{children:" 8-bit Racing v0.0.1"}),Object(i.jsx)("p",{children:'This mini-game use a neural network for voice recognition. You can control the car using voice commands. To enable the neural network, click "Yes"'}),c?Object(i.jsx)("p",{className:"nn-loader",children:"Neuronal Network loading..."}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{children:"Turn on Speech recognition?"}),Object(i.jsxs)("div",{className:"button-container",children:[Object(i.jsx)(K,{reference:o,id:"enableButton",title:"Yes",handleButtonOnClick:l}),Object(i.jsx)(K,{id:"disableButton",title:"No",handleButtonOnClick:l})]})]})]}),Object(i.jsx)("div",{className:"game-container-2"}),Object(i.jsx)("div",{className:"game-container-3"})]})}),N=n(19),T=n(5),S=n(10),A=n(14),I=n(15),E=n(108),M=E.d.TextureCache,D=(E.a,E.c),L=(E.b,"front"),B="back",P="MAIN_GAME_CAR",F=[{name:"react",link:"https://ru.reactjs.org/",height:32,width:32},{name:"pixi",link:"https://www.pixijs.com/"},{name:"npm",link:"https://www.npmjs.com/package/@tensorflow-models/speech-commands",width:50,height:50},{name:"tf",link:"https://www.tensorflow.org/",width:100}],G=[{name:"github",link:"https://github.com/bityutskiyAO/8bit-racing-game-with-speech-recognition",height:32,width:32},{name:"vk",link:"https://vk.com/bit_a",height:32,width:32}],_=c.a.createContext("stop"),H=(n(296),{isCrashing:!1,app:new E.a({width:800,height:document.documentElement.clientHeight,antialias:!0,transparent:!0,resolution:1}),gameCar:null,enemyCars:null,currentRoad:null,topRoad:null,stopTimer:!1,gameDuration:"",gameReward:0,isNeuronalNetworkEnable:!1,isNeuronalNetworkLoaded:!1,pauseSpeechRecognition:!1,isStartWindowShown:!0}),W=function(e){Object(A.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).setup=function(){var e=a.state.app,t=a.createCarSprite(P,"gameCar"),n=a.createCarSprite(L,"enemyCar"),i=M.road,r=new D(i);r.width=e.view.width,r.height=e.view.height,a.intervalId=a.startEnemyCreation(),e.stage.addChild(r),e.stage.addChild(t),e.stage.addChild(n),a.setState({enemyCars:[{id:a.enemyCarsId,enemy:n,direction:"front"}],gameCar:t,currentRoad:r}),e.ticker.add((function(e){return a.gameLoop(e)}))},a.calcRandomPosition=function(){return Math.round(Math.random())},a.createCarSprite=function(e,t){var n=a.state.app.view,i=M[t],r=new D(i);switch(r.vx=0,r.vy=0,r.width=150,r.height=200,e){case P:r.rotation=Math.PI,r.position.set(n.width-n.width/4+r.width/2+35,n.height-50);break;case B:r.rotation=Math.PI;var c=a.calcRandomPosition()?35:-120;r.position.set(n.width-n.width/4+r.width/2+c,-r.height);break;case L:var s=a.calcRandomPosition()?120:-35;r.position.set(n.width/4-r.width/2+s,-r.height)}return r},a.createNewRoad=function(){var e=a.state.app,t=M.road,n=new D(t);return n.width=e.view.width,n.height=e.view.height+23,n.position.set(0,23-e.view.height),e.stage.addChildAt(n,0),n},a.moveRoad=function(){var e=a.state,t=e.currentRoad,n=e.topRoad;a.isUpdateRoadStateNeed(t),t.vy=2,t.y+=t.vy,n&&(n.vy=2,n.y+=n.vy),!n&&t.y>=0&&a.setState({topRoad:a.createNewRoad()})},a.isUpdateRoadStateNeed=function(e){var t=a.state.app;e.y>=t.view.height&&(a.setState((function(e){return{currentRoad:e.topRoad,topRoad:null}})),t.stage.removeChild(e))},a.gameLoop=function(e){var t=a.state,n=t.enemyCars,i=t.gameCar,r=t.isNeuronalNetworkEnable,c=t.isNeuronalNetworkLoaded;r&&!c||(i&&a.moveCar(a.context),i&&n&&(a.moveRoad(),n.forEach((function(e){var t=e.enemy,n=e.direction,r=e.id;t.vx=0,t.vy=5,t.y+=t.vy,a.carOnGameFieldChecking(t,n)&&(a.state.app.stage.removeChild(t),a.setState((function(e){return{gameReward:++e.gameReward,enemyCars:e.enemyCars.filter((function(e){return e.id!==r}))}}))),"front"===n?a.carHitChecking(i,t,t.width,t.height)&&a.stopAllMovement():a.carHitChecking(i,t,0,0)&&a.stopAllMovement()}))))},a.carOnGameFieldChecking=function(e,t){var n;if((null===(n=a.state.app)||void 0===n?void 0:n.view)&&e){var i="back"===t?e.height:0;return e.y-i>a.state.app.view.height}},a.startEnemyCreation=function(){return setInterval((function(){var e=a.calcRandomPosition()?B:L,t=a.createCarSprite(e,"enemyCar");a.setState((function(n){return n.enemyCars.push({id:++a.enemyCarsId,enemy:t,direction:e}),{enemyCars:Object(N.a)(n.enemyCars)}})),a.state.app.stage.addChild(t)}),5e3)},a.moveCar=function(e){var t=a.state,n=t.gameCar;switch((t.app.view.width-n.x<1||n.x-n.width<=0)&&a.stopAllMovement(),e){case"up":n.vx=0,n.vy=-2;break;case"down":n.vx=0,n.vy=5;break;case"left":n.vx=-8,n.vy=0;break;case"right":n.vx=8,n.vy=0;break;case"stop":n.vx=0,n.vy=0}a.xAxisOffset+=n.vx,160===Math.abs(a.xAxisOffset)&&(a.xAxisOffset=0,a.props.setMoveDirection("stop")),n.y+=n.vy,n.x+=n.vx},a.stopAllMovement=function(){var e=a.state.app;clearInterval(a.intervalId),e.ticker.stop(),a.clearAllEnemies(),a.setState({enemyCars:[],stopTimer:!0,isCrashing:!0}),a.props.setNNPaused(!0),a.props.setMoveDirection("stop")},a.carHitChecking=function(e,t,n,a){var i,r,c,s;return!1,e.centerX=e.x+e.width/2,e.centerY=e.y+e.height/2,t.centerX=t.x+t.width/2+n,t.centerY=t.y+t.height/2+a,e.halfWidth=e.width/2,e.halfHeight=e.height/2,t.halfWidth=t.width/2,t.halfHeight=t.height/2,c=e.centerX-t.centerX,s=e.centerY-t.centerY,i=e.halfWidth+t.halfWidth,r=e.halfHeight+t.halfHeight,Math.abs(c)<i&&Math.abs(s)<r},a.clearAllEnemies=function(){var e=a.state,t=e.enemyCars,n=e.app;t.forEach((function(e){n.stage.removeChild(e.enemy)}))},a.onRestartGameClick=function(){var e=a.state,t=e.gameCar,n=e.app;n.ticker.start(),a.setState({isCrashing:!1,stopTimer:!1,gameReward:0}),a.props.setMoveDirection("stop"),a.setInitialGameCarPosition(t,n.view),a.intervalId=a.startEnemyCreation()},a.setInitialGameCarPosition=function(e,t){e.position.set(t.width-t.width/4+e.width/2+35,t.height-50)},a.calcGameDuration=function(e){a.setState({gameDuration:e()})},a.rootContainerRef=c.a.createRef(),a.state=H,a.xAxisOffset=0,a.enemyCarsId=0,a}return Object(S.a)(n,[{key:"componentDidMount",value:function(){this.rootContainerRef.current.appendChild(this.state.app.view),this.state.app.loader.add("gameCar",u).add("enemyCar",l).add("road",h).load(this.setup)}},{key:"render",value:function(){var e=this.state,t=e.isCrashing,n=e.gameReward,a=e.stopTimer,r=e.gameDuration;return Object(i.jsx)("div",{className:"app-container",children:Object(i.jsxs)("div",{ref:this.rootContainerRef,className:"game-container",children:[Object(i.jsx)(C,{gameReward:n,gameDuration:this.calcGameDuration,stopTimer:a}),t&&Object(i.jsx)(y,{gameReward:n,onRestartGameClick:this.onRestartGameClick,finalTime:r})]})})}}]),n}(c.a.Component);W.contextType=_;var Y=W,K=(n(297),function(e){var t=e.id,n=e.handleButtonOnClick,a=e.title,r=e.classNames,c=e.reference;return Object(i.jsx)("div",{ref:c,className:"button-8bit ".concat(r),onClick:n,children:Object(i.jsx)("div",{id:t,className:"button-8bit-after",children:a})})}),U=(n(298),function(e){var t=e.imgLinks,n=e.title;return Object(i.jsxs)("div",{className:"info-links info-links__container",children:[Object(i.jsx)("h3",{children:n}),Object(i.jsx)("div",{className:"info-links__links-container",children:t.map((function(e){return Object(i.jsx)("a",{href:e.link,children:Object(i.jsx)("img",{src:a[e.name],width:e.width||64,height:e.height||64,alt:n})})}))})]})}),X=n(4),J=n.n(X),V=n(12),q=n(258),z=function(){var e=Object(V.a)(J.a.mark((function e(){var t;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=q.a("BROWSER_FFT"),e.next=3,t.ensureModelLoaded();case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(319);var Q=function(e){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!0),o=Object(d.a)(s,2),l=o[0],u=o[1],h=Object(r.useState)(!1),m=Object(d.a)(h,2),f=m[0],p=m[1],j=Object(r.useState)(!1),g=Object(d.a)(j,2),b=g[0],v=g[1],w=Object(r.useState)("stop"),x=Object(d.a)(w,2),O=x[0],C=x[1];Object(r.useEffect)((function(){document.addEventListener("keydown",(function(e){switch(e.code){case"KeyW":case"ArrowUp":C("up");break;case"KeyD":case"ArrowRight":C("right");break;case"KeyS":case"ArrowDown":e.preventDefault(),C("down");break;case"KeyA":case"ArrowLeft":C("left");break;case"Space":C("stop")}}))}),[]);var y=function(e){C((function(t){if(t!==e)return console.log("Change direction to: ",e),e}))};return Object(i.jsxs)("div",{className:"container",children:[l&&Object(i.jsx)(R,{onInitButtonClick:function(e){c(e),console.log("value",e),e?z().then((function(e){!function(e,t,n){var a=e.wordLabels();e.listen((function(e){var i=e.scores;n||((i=Array.from(i).map((function(e,t){return{score:e,word:a[t]}}))).sort((function(e,t){return t.score-e.score})),console.log("TI CHE SUKA EBALAY",i[0]),t(i[0].word))}),{overlapFactor:.4,probabilityThreshold:.99})}(e,y,b),console.log("LOADED"),p(!0),u(!1)})):u(!1)}}),!l&&(!a||f)&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(k,{isTextNeed:!0,infoTitle:"App build with",infoLinks:F}),Object(i.jsx)(_.Provider,{value:O,children:Object(i.jsx)(Y,{setNNPaused:v,moveDirection:O,setMoveDirection:C})}),Object(i.jsx)(k,{infoTitle:"Follow us",infoLinks:G})]})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,321)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[320,1,2]]]);
//# sourceMappingURL=main.a6c48fed.chunk.js.map