var Be=Object.defineProperty,Le=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ye=Object.getOwnPropertySymbols;var He=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable;var Ne=(s,e,a)=>e in s?Be(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,oe=(s,e)=>{for(var a in e||(e={}))He.call(e,a)&&Ne(s,a,e[a]);if(ye)for(var a of ye(e))Oe.call(e,a)&&Ne(s,a,e[a]);return s},ce=(s,e)=>Le(s,Ce(e));import{S as pe,i as ge,s as be,e as m,t as I,k as L,c as _,a as p,h as A,m as C,d as i,g as q,J as n,j as le,b as v,L as qe,K as Se,M as me,w as fe,x as ue,y as he,q as z,o as Z,B as de,v as Te,p as _e,n as ve}from"../chunks/vendor-6bf3c777.js";function Pe(s,e,a){const t=s.slice();return t[7]=e[a],t}function Je(s){let e,a;return{c(){e=m("span"),a=I("\u{1F480}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F480}"),l.forEach(i),this.h()},h(){v(e,"title","Dead")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Ue(s){let e,a;return{c(){e=m("span"),a=I("\u{1F603}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F603}"),l.forEach(i),this.h()},h(){v(e,"title","Alive")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Ye(s){let e,a;return{c(){e=m("span"),a=I("\u{1F451}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F451}"),l.forEach(i),this.h()},h(){v(e,"title","Winner")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function ze(s){let e,a;return{c(){e=m("span"),a=I("\u{1F480}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F480}"),l.forEach(i),this.h()},h(){v(e,"title","Dead")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Fe(s){let e,a;return{c(){e=m("span"),a=I("\u{1F603}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F603}"),l.forEach(i),this.h()},h(){v(e,"title","Alive")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Ge(s){let e,a;return{c(){e=m("span"),a=I("\u{1F47B}"),this.h()},l(t){e=_(t,"SPAN",{title:!0});var l=p(e);a=A(l,"\u{1F47B}"),l.forEach(i),this.h()},h(){v(e,"title","Not Playing")},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Ie(s){let e,a=s[7].name+"",t,l,g;function P(S,d){return S[7].isNotPlaying?Ge:S[7].alive?Fe:ze}let y=P(s),N=y(s);return{c(){e=m("div"),t=I(a),l=L(),N.c(),g=L()},l(S){e=_(S,"DIV",{});var d=p(e);t=A(d,a),l=C(d),N.l(d),g=C(d),d.forEach(i)},m(S,d){q(S,e,d),n(e,t),n(e,l),N.m(e,null),n(e,g)},p(S,d){d&16&&a!==(a=S[7].name+"")&&le(t,a),y!==(y=P(S))&&(N.d(1),N=y(S),N&&(N.c(),N.m(e,g)))},d(S){S&&i(e),N.d()}}}function Ke(s){let e,a,t,l,g,P,y,N,S,d,R,H;function T(f,k){return f[2]?Ye:f[1]?Ue:Je}let O=T(s),V=O(s),M=s[4],E=[];for(let f=0;f<M.length;f+=1)E[f]=Ie(Pe(s,M,f));return{c(){e=m("li"),a=m("b"),t=I(s[3]),l=L(),V.c(),g=L(),P=m("span"),y=I(s[0]),N=L(),S=m("div");for(let f=0;f<E.length;f+=1)E[f].c();this.h()},l(f){e=_(f,"LI",{class:!0,style:!0});var k=p(e);a=_(k,"B",{});var h=p(a);t=A(h,s[3]),l=C(h),V.l(h),h.forEach(i),g=C(k),P=_(k,"SPAN",{class:!0});var u=p(P);y=A(u,s[0]),u.forEach(i),N=C(k),S=_(k,"DIV",{});var b=p(S);for(let W=0;W<E.length;W+=1)E[W].l(b);b.forEach(i),k.forEach(i),this.h()},h(){v(P,"class","score"),v(e,"class","team team-top svelte-dwjpza"),v(e,"style",d=s[5]?"height: 25px;":"")},m(f,k){q(f,e,k),n(e,a),n(a,t),n(a,l),V.m(a,null),n(e,g),n(e,P),n(P,y),n(e,N),n(e,S);for(let h=0;h<E.length;h+=1)E[h].m(S,null);R||(H=qe(e,"click",s[6]),R=!0)},p(f,[k]){if(k&8&&le(t,f[3]),O!==(O=T(f))&&(V.d(1),V=O(f),V&&(V.c(),V.m(a,null))),k&1&&le(y,f[0]),k&16){M=f[4];let h;for(h=0;h<M.length;h+=1){const u=Pe(f,M,h);E[h]?E[h].p(u,k):(E[h]=Ie(u),E[h].c(),E[h].m(S,null))}for(;h<E.length;h+=1)E[h].d(1);E.length=M.length}k&32&&d!==(d=f[5]?"height: 25px;":"")&&v(e,"style",d)},i:Se,o:Se,d(f){f&&i(e),V.d(),me(E,f),R=!1,H()}}}function Ze(s,e,a){let{judge:t="Judge"}=e,{alive:l=!0}=e,{winner:g=!1}=e,{teamName:P="TeamName"}=e,{players:y=["Player 1"]}=e,N=!0;const S=()=>{a(5,N=!N)};return s.$$set=d=>{"judge"in d&&a(0,t=d.judge),"alive"in d&&a(1,l=d.alive),"winner"in d&&a(2,g=d.winner),"teamName"in d&&a(3,P=d.teamName),"players"in d&&a(4,y=d.players)},[t,l,g,P,y,N,S]}class Ae extends pe{constructor(e){super();ge(this,e,Ze,Ke,be,{judge:0,alive:1,winner:2,teamName:3,players:4})}}function Qe(s){let e,a,t,l=s[1].teams[s[0].a].name+"",g,P,y=s[1].teams[s[0].b].name+"",N,S,d=F(s[2])+"",R,H,T=F(s[3])+"",O,V,M,E,f,k,h;return E=new Ae({props:{judge:s[0].judge,teamName:s[1].teams[s[0].a].name,players:s[2],alive:F(s[2])>0,winner:F(s[3])==0}}),k=new Ae({props:{judge:s[0].judge,teamName:s[1].teams[s[0].b].name,players:s[3],alive:F(s[3])>0,winner:F(s[2])==0}}),{c(){e=m("ul"),a=m("div"),t=m("b"),g=I(l),P=I(" VS. "),N=I(y),S=I("("),R=I(d),H=I("-"),O=I(T),V=I(")"),M=L(),fe(E.$$.fragment),f=L(),fe(k.$$.fragment),this.h()},l(u){e=_(u,"UL",{class:!0});var b=p(e);a=_(b,"DIV",{});var W=p(a);t=_(W,"B",{});var w=p(t);g=A(w,l),P=A(w," VS. "),N=A(w,y),S=A(w,"("),R=A(w,d),H=A(w,"-"),O=A(w,T),V=A(w,")"),w.forEach(i),W.forEach(i),M=C(b),ue(E.$$.fragment,b),f=C(b),ue(k.$$.fragment,b),b.forEach(i),this.h()},h(){v(e,"class","matchup svelte-171i4iz")},m(u,b){q(u,e,b),n(e,a),n(a,t),n(t,g),n(t,P),n(t,N),n(t,S),n(t,R),n(t,H),n(t,O),n(t,V),n(e,M),he(E,e,null),n(e,f),he(k,e,null),h=!0},p(u,[b]){(!h||b&3)&&l!==(l=u[1].teams[u[0].a].name+"")&&le(g,l),(!h||b&3)&&y!==(y=u[1].teams[u[0].b].name+"")&&le(N,y),(!h||b&4)&&d!==(d=F(u[2])+"")&&le(R,d),(!h||b&8)&&T!==(T=F(u[3])+"")&&le(O,T);const W={};b&1&&(W.judge=u[0].judge),b&3&&(W.teamName=u[1].teams[u[0].a].name),b&4&&(W.players=u[2]),b&4&&(W.alive=F(u[2])>0),b&8&&(W.winner=F(u[3])==0),E.$set(W);const w={};b&1&&(w.judge=u[0].judge),b&3&&(w.teamName=u[1].teams[u[0].b].name),b&8&&(w.players=u[3]),b&8&&(w.alive=F(u[3])>0),b&4&&(w.winner=F(u[2])==0),k.$set(w)},i(u){h||(z(E.$$.fragment,u),z(k.$$.fragment,u),h=!0)},o(u){Z(E.$$.fragment,u),Z(k.$$.fragment,u),h=!1},d(u){u&&i(e),de(E),de(k)}}}function F(s){if(!s)return;let e=0;for(var a=0;a<s.length;a++)s[a].isNotPlaying!=!0&&s[a].alive&&e++;return e}function Xe(s,e,a){let{match:t=null}=e,{data:l=null}=e,g=[],P=[];return Te(async()=>{a(2,g=l.teams[t.a].players),a(3,P=l.teams[t.b].players),l.teams[t.a].isSubInPlay!=null&&l.teams[t.a].isSubInPlay!=-1?(console.log("Here",l.teams[t.a].isSubInPlay),a(2,g[l.teams[t.a].isSubInPlay].isNotPlaying=!0,g),g.push(ce(oe({},l.teams[t.a].sub),{isSub:!0}))):l.teams[t.a].isSubInPlay!=null&&g.push(ce(oe({},l.teams[t.a].sub),{isNotPlaying:!0,isSub:!0})),l.teams[t.b].isSubInPlay!=null&&l.teams[t.b].isSubInPlay!=-1?(a(3,P[l.teams[t.b].isSubInPlay].isNotPlaying=!0,P),P.push(ce(oe({},l.teams[t.b].sub),{isSub:!0}))):l.teams[t.b].isSubInPlay!=null&&P.push(ce(oe({},l.teams[t.b].sub),{isNotPlaying:!0,isSub:!0}))}),s.$$set=y=>{"match"in y&&a(0,t=y.match),"data"in y&&a(1,l=y.data)},[t,l,g,P]}class We extends pe{constructor(e){super();ge(this,e,Xe,Qe,be,{match:0,data:1})}}function we(s,e,a){const t=s.slice();return t[1]=e[a],t}function De(s,e,a){const t=s.slice();return t[1]=e[a],t}function je(s){let e,a;return{c(){e=m("h1"),a=I("Loading...")},l(t){e=_(t,"H1",{});var l=p(e);a=A(l,"Loading..."),l.forEach(i)},m(t,l){q(t,e,l),n(e,a)},d(t){t&&i(e)}}}function Ve(s){let e,a,t,l,g,P,y,N,S,d,R,H,T,O,V,M,E,f,k,h,u,b,W,w,G,Q,x,U=s[0].week1,D=[];for(let o=0;o<U.length;o+=1)D[o]=Me(De(s,U,o));const ne=o=>Z(D[o],1,1,()=>{D[o]=null});let Y=s[0].week2,j=[];for(let o=0;o<Y.length;o+=1)j[o]=Re(we(s,Y,o));const se=o=>Z(j[o],1,1,()=>{j[o]=null});return{c(){e=m("section"),a=m("div"),t=I("Last Update: March 30 @ 9pm"),l=L(),g=m("div"),P=I("\u{1F47B} = Not Playing | \u{1F603} = Alive | \u{1F480} = Dead | \u{1F451} = Winner"),y=L(),N=m("div"),S=I("Click on team for players"),d=L(),R=m("div"),H=m("div"),T=m("div"),O=I("Week 1"),V=m("br"),M=m("span"),E=I("March 28"),f=L();for(let o=0;o<D.length;o+=1)D[o].c();k=L(),h=m("div"),u=m("div"),b=I("Week 2"),W=m("br"),w=m("span"),G=I("April 4"),Q=L();for(let o=0;o<j.length;o+=1)j[o].c();this.h()},l(o){e=_(o,"SECTION",{id:!0});var c=p(e);a=_(c,"DIV",{class:!0});var r=p(a);t=A(r,"Last Update: March 30 @ 9pm"),r.forEach(i),l=C(c),g=_(c,"DIV",{class:!0});var B=p(g);P=A(B,"\u{1F47B} = Not Playing | \u{1F603} = Alive | \u{1F480} = Dead | \u{1F451} = Winner"),B.forEach(i),y=C(c),N=_(c,"DIV",{class:!0});var X=p(N);S=A(X,"Click on team for players"),X.forEach(i),d=C(c),R=_(c,"DIV",{class:!0});var ee=p(R);H=_(ee,"DIV",{class:!0});var te=p(H);T=_(te,"DIV",{class:!0});var $=p(T);O=A($,"Week 1"),V=_($,"BR",{}),M=_($,"SPAN",{class:!0});var re=p(M);E=A(re,"March 28"),re.forEach(i),$.forEach(i),f=C(te);for(let K=0;K<D.length;K+=1)D[K].l(te);te.forEach(i),k=C(ee),h=_(ee,"DIV",{class:!0});var J=p(h);u=_(J,"DIV",{class:!0});var ae=p(u);b=A(ae,"Week 2"),W=_(ae,"BR",{}),w=_(ae,"SPAN",{class:!0});var ie=p(w);G=A(ie,"April 4"),ie.forEach(i),ae.forEach(i),Q=C(J);for(let K=0;K<j.length;K+=1)j[K].l(J);J.forEach(i),ee.forEach(i),c.forEach(i),this.h()},h(){v(a,"class","info svelte-pc480a"),v(g,"class","info svelte-pc480a"),v(N,"class","info svelte-pc480a"),v(M,"class","date"),v(T,"class","round-details"),v(H,"class","round round-one current"),v(w,"class","date"),v(u,"class","round-details"),v(h,"class","round round-two"),v(R,"class","container"),v(e,"id","bracket")},m(o,c){q(o,e,c),n(e,a),n(a,t),n(e,l),n(e,g),n(g,P),n(e,y),n(e,N),n(N,S),n(e,d),n(e,R),n(R,H),n(H,T),n(T,O),n(T,V),n(T,M),n(M,E),n(H,f);for(let r=0;r<D.length;r+=1)D[r].m(H,null);n(R,k),n(R,h),n(h,u),n(u,b),n(u,W),n(u,w),n(w,G),n(h,Q);for(let r=0;r<j.length;r+=1)j[r].m(h,null);x=!0},p(o,c){if(c&1){U=o[0].week1;let r;for(r=0;r<U.length;r+=1){const B=De(o,U,r);D[r]?(D[r].p(B,c),z(D[r],1)):(D[r]=Me(B),D[r].c(),z(D[r],1),D[r].m(H,null))}for(ve(),r=U.length;r<D.length;r+=1)ne(r);_e()}if(c&1){Y=o[0].week2;let r;for(r=0;r<Y.length;r+=1){const B=we(o,Y,r);j[r]?(j[r].p(B,c),z(j[r],1)):(j[r]=Re(B),j[r].c(),z(j[r],1),j[r].m(h,null))}for(ve(),r=Y.length;r<j.length;r+=1)se(r);_e()}},i(o){if(!x){for(let c=0;c<U.length;c+=1)z(D[c]);for(let c=0;c<Y.length;c+=1)z(j[c]);x=!0}},o(o){D=D.filter(Boolean);for(let c=0;c<D.length;c+=1)Z(D[c]);j=j.filter(Boolean);for(let c=0;c<j.length;c+=1)Z(j[c]);x=!1},d(o){o&&i(e),me(D,o),me(j,o)}}}function Me(s){let e,a;return e=new We({props:{match:s[1],data:s[0]}}),{c(){fe(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,l){he(e,t,l),a=!0},p(t,l){const g={};l&1&&(g.match=t[1]),l&1&&(g.data=t[0]),e.$set(g)},i(t){a||(z(e.$$.fragment,t),a=!0)},o(t){Z(e.$$.fragment,t),a=!1},d(t){de(e,t)}}}function Re(s){let e,a;return e=new We({props:{match:s[1],data:s[0]}}),{c(){fe(e.$$.fragment)},l(t){ue(e.$$.fragment,t)},m(t,l){he(e,t,l),a=!0},p(t,l){const g={};l&1&&(g.match=t[1]),l&1&&(g.data=t[0]),e.$set(g)},i(t){a||(z(e.$$.fragment,t),a=!0)},o(t){Z(e.$$.fragment,t),a=!1},d(t){de(e,t)}}}function $e(s){let e,a,t,l,g,P,y,N,S,d,R,H,T,O,V,M,E,f,k,h,u,b,W,w,G,Q,x,U,D,ne,Y,j,se,o=!s[0]&&je(),c=s[0]&&Ve(s);return{c(){e=L(),a=m("header"),t=m("div"),l=m("p"),g=I("NOT"),P=L(),y=m("h1"),N=I("SYCAMORE DART WARS"),S=L(),d=m("p"),R=m("i"),H=I(" 2022 "),T=m("i"),O=L(),o&&o.c(),V=L(),c&&c.c(),M=L(),E=m("section"),f=m("div"),k=m("a"),h=m("i"),u=L(),b=m("a"),W=m("i"),w=L(),G=m("a"),Q=m("i"),x=L(),U=m("p"),D=I("\xA9 2022 Advait Jayadevan Nair. All rights reserved."),ne=L(),Y=m("p"),j=I("This website and any content on it is not assoiated with Sycamore High School."),this.h()},l(r){e=C(r),a=_(r,"HEADER",{class:!0});var B=p(a);t=_(B,"DIV",{class:!0});var X=p(t);l=_(X,"P",{class:!0,id:!0});var ee=p(l);g=A(ee,"NOT"),ee.forEach(i),P=C(X),y=_(X,"H1",{id:!0});var te=p(y);N=A(te,"SYCAMORE DART WARS"),te.forEach(i),S=C(X),d=_(X,"P",{class:!0});var $=p(d);R=_($,"I",{class:!0}),p(R).forEach(i),H=A($," 2022 "),T=_($,"I",{class:!0}),p(T).forEach(i),$.forEach(i),X.forEach(i),B.forEach(i),O=C(r),o&&o.l(r),V=C(r),c&&c.l(r),M=C(r),E=_(r,"SECTION",{class:!0});var re=p(E);f=_(re,"DIV",{class:!0});var J=p(f);k=_(J,"A",{class:!0,href:!0});var ae=p(k);h=_(ae,"I",{class:!0}),p(h).forEach(i),ae.forEach(i),u=C(J),b=_(J,"A",{class:!0,href:!0});var ie=p(b);W=_(ie,"I",{class:!0}),p(W).forEach(i),ie.forEach(i),w=C(J),G=_(J,"A",{class:!0,href:!0});var K=p(G);Q=_(K,"I",{class:!0}),p(Q).forEach(i),K.forEach(i),x=C(J),U=_(J,"P",{class:!0});var Ee=p(U);D=A(Ee,"\xA9 2022 Advait Jayadevan Nair. All rights reserved."),Ee.forEach(i),ne=C(J),Y=_(J,"P",{class:!0});var ke=p(Y);j=A(ke,"This website and any content on it is not assoiated with Sycamore High School."),ke.forEach(i),J.forEach(i),re.forEach(i),this.h()},h(){v(l,"class","intro"),v(l,"id","intro"),v(y,"id","headline"),v(R,"class","fa fa-star"),v(T,"class","fa fa-star"),v(d,"class","year"),v(t,"class","hero-wrap"),v(a,"class","hero"),v(h,"class","fa fa-book"),v(k,"class","share-icon"),v(k,"href","https://docs.google.com/document/d/10t1YIo_EGLmgZqN013qmsDePMnURhsWIExMa9-9V1qY/edit?usp=sharing"),v(W,"class","fa fa-twitter"),v(b,"class","share-icon"),v(b,"href","https://twitter.com/dartwarz2022"),v(Q,"class","fa fa-usd"),v(G,"class","share-icon"),v(G,"href","https://venmo.com/code?user_id=2815419379351552226&created=1647963893.720152&printed=1"),v(U,"class","disclamer svelte-pc480a"),v(Y,"class","disclamer svelte-pc480a"),v(f,"class","share-wrap"),v(E,"class","share")},m(r,B){q(r,e,B),q(r,a,B),n(a,t),n(t,l),n(l,g),n(t,P),n(t,y),n(y,N),n(t,S),n(t,d),n(d,R),n(d,H),n(d,T),q(r,O,B),o&&o.m(r,B),q(r,V,B),c&&c.m(r,B),q(r,M,B),q(r,E,B),n(E,f),n(f,k),n(k,h),n(f,u),n(f,b),n(b,W),n(f,w),n(f,G),n(G,Q),n(f,x),n(f,U),n(U,D),n(f,ne),n(f,Y),n(Y,j),se=!0},p(r,[B]){r[0]?o&&(o.d(1),o=null):o||(o=je(),o.c(),o.m(V.parentNode,V)),r[0]?c?(c.p(r,B),B&1&&z(c,1)):(c=Ve(r),c.c(),z(c,1),c.m(M.parentNode,M)):c&&(ve(),Z(c,1,1,()=>{c=null}),_e())},i(r){se||(z(c),se=!0)},o(r){Z(c),se=!1},d(r){r&&i(e),r&&i(a),r&&i(O),o&&o.d(r),r&&i(V),c&&c.d(r),r&&i(M),r&&i(E)}}}const at=!0;function xe(s,e,a){let t=null;return Te(async()=>{const l=await fetch("data.json");a(0,t=await l.json()),console.log("Fetched Data:",t)}),[t]}class lt extends pe{constructor(e){super();ge(this,e,xe,$e,be,{})}}export{lt as default,at as prerender};
