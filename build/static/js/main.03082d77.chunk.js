(this["webpackJsonpbuildspace-solana"]=this["webpackJsonpbuildspace-solana"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),r=n.n(i),o=(n(14),n(9)),s=n(2),u=n.n(s),l=n(4),d=n(6),p=(n(16),n(0)),b=function(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),s=r[0],b=r[1],f=Object(c.useState)([]),h=Object(d.a)(f,2),j=h[0],m=h[1],g=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)){e.next=12;break}if(!n.isPhantom){e.next=10;break}return console.log("Phantom wallet found!"),e.next=7,n.connect({onlyIfTrusted:!0});case 7:c=e.sent,console.log("Connected with Public Key",c.publicKey.toString()),a(c.publicKey.toString());case 10:e.next=13;break;case 12:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:c=e.sent,console.log("Connected with Public Key:",c.publicKey.toString()),a(c.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.length>0?(console.log("Gif link:",s),m([].concat(Object(o.a)(j),[s])),b("")):console.log("Empty input. Try again.");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e){var t=e.target.value;b(t)},O=["https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp","https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g","https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g","https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp"];return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(c.useEffect)((function(){n&&(console.log("Fetching GIF list..."),m(O))}),[n]),Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:n?"authed-container":"container",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"header-container",children:[Object(p.jsx)("p",{className:"header",children:"\ud83d\uddbc GIF Portal"}),Object(p.jsx)("p",{className:"sub-text",children:"View your GIF collection in the metaverse \u2728"}),!n&&Object(p.jsx)("button",{className:"cta-button connect-wallet-button",onClick:v,children:"Connect to Wallet"}),n&&Object(p.jsxs)("div",{className:"connected-container",children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x()},children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter gif link!",value:s,onChange:y}),Object(p.jsx)("button",{type:"submit",className:"cta-button submit-gif-button",children:"Submit"})]}),Object(p.jsx)("div",{className:"gif-grid",children:j.map((function(e){return Object(p.jsx)("div",{className:"gif-item",children:Object(p.jsx)("img",{src:e,alt:e})},e)}))})]})]})})})})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.03082d77.chunk.js.map