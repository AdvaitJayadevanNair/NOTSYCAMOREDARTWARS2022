import{S as Ne,i as De,s as Ue,e as U,t as O,c as I,a as w,h as A,d as b,g as G,J as h,j as Z,k as S,m as J,R as Oe,T as oe,M as Q,K as re,L as $,P as se,U as Ae,q as X,l as ae,o as F,p as te,v as Ke,n as ne,b as z,O as le,V as ee,w as Ie,x as Ve,y as je,B as we}from"../chunks/vendor-23843fa1.js";function fe(e,l,t){const n=e.slice();return n[6]=l[t],n}function ue(e){let l,t=e[0][e[6]]+"",n,s;return{c(){l=U("option"),n=O(t),this.h()},l(o){l=I(o,"OPTION",{});var f=w(l);n=A(f,t),f.forEach(b),this.h()},h(){l.__value=s=e[6],l.value=l.__value},m(o,f){G(o,l,f),h(l,n)},p(o,f){f&3&&t!==(t=o[0][o[6]]+"")&&Z(n,t),f&2&&s!==(s=o[6])&&(l.__value=s,l.value=l.__value)},d(o){o&&b(l)}}}function Re(e){let l,t,n,s,o,f,r=e[1],d=[];for(let a=0;a<r.length;a+=1)d[a]=ue(fe(e,r,a));return{c(){l=U("select");for(let a=0;a<d.length;a+=1)d[a].c();t=S(),n=U("button"),s=O("Add kill"),this.h()},l(a){l=I(a,"SELECT",{});var _=w(l);for(let B=0;B<d.length;B+=1)d[B].l(_);_.forEach(b),t=J(a),n=I(a,"BUTTON",{});var i=w(n);s=A(i,"Add kill"),i.forEach(b),this.h()},h(){e[3]===void 0&&Oe(()=>e[4].call(l))},m(a,_){G(a,l,_);for(let i=0;i<d.length;i+=1)d[i].m(l,null);oe(l,e[3]),G(a,t,_),G(a,n,_),h(n,s),o||(f=[Q(l,"change",e[4]),Q(n,"click",e[5])],o=!0)},p(a,[_]){if(_&3){r=a[1];let i;for(i=0;i<r.length;i+=1){const B=fe(a,r,i);d[i]?d[i].p(B,_):(d[i]=ue(B),d[i].c(),d[i].m(l,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=r.length}_&10&&oe(l,a[3])},i:re,o:re,d(a){a&&b(l),$(d,a),a&&b(t),a&&b(n),o=!1,se(f)}}}function Se(e,l,t){let{players:n=null}=l,{enemies:s=null}=l,{add:o=null}=l,f=0;function r(){f=Ae(this),t(3,f),t(1,s)}const d=()=>o(f);return e.$$set=a=>{"players"in a&&t(0,n=a.players),"enemies"in a&&t(1,s=a.enemies),"add"in a&&t(2,o=a.add)},[n,s,o,f,r,d]}class Be extends Ne{constructor(l){super();De(this,l,Se,Re,Ue,{players:0,enemies:1,add:2})}}function _e(e,l,t){const n=e.slice();return n[18]=l[t],n[20]=t,n}function he(e,l,t){const n=e.slice();return n[21]=l[t],n[22]=l,n[23]=t,n}function ce(e,l,t){const n=e.slice();return n[24]=l[t],n[25]=l,n[26]=t,n}function pe(e,l,t){const n=e.slice();return n[27]=l[t],n}function me(e,l,t){const n=e.slice();return n[24]=l[t],n[30]=l,n[26]=t,n}function de(e,l,t){const n=e.slice();return n[27]=l[t],n[32]=t,n}function ve(e){let l,t;return{c(){l=U("h1"),t=O("Loading...")},l(n){l=I(n,"H1",{});var s=w(l);t=A(s,"Loading..."),s.forEach(b)},m(n,s){G(n,l,s),h(l,t)},d(n){n&&b(l)}}}function ge(e){let l,t,n,s,o,f,r,d,a,_=e[3],i=[];for(let p=0;p<_.length;p+=1)i[p]=Pe(_e(e,_,p));const B=p=>F(i[p],1,1,()=>{i[p]=null});return{c(){l=U("h1"),t=O("Weeks"),n=S();for(let p=0;p<i.length;p+=1)i[p].c();s=S(),o=U("button"),f=O("Get Data")},l(p){l=I(p,"H1",{});var N=w(l);t=A(N,"Weeks"),N.forEach(b),n=J(p);for(let R=0;R<i.length;R+=1)i[R].l(p);s=J(p),o=I(p,"BUTTON",{});var k=w(o);f=A(k,"Get Data"),k.forEach(b)},m(p,N){G(p,l,N),h(l,t),G(p,n,N);for(let k=0;k<i.length;k+=1)i[k].m(p,N);G(p,s,N),G(p,o,N),h(o,f),r=!0,d||(a=Q(o,"click",e[4]),d=!0)},p(p,N){if(N[0]&14|N[1]&2){_=p[3];let k;for(k=0;k<_.length;k+=1){const R=_e(p,_,k);i[k]?(i[k].p(R,N),X(i[k],1)):(i[k]=Pe(R),i[k].c(),X(i[k],1),i[k].m(s.parentNode,s))}for(ne(),k=_.length;k<i.length;k+=1)B(k);te()}},i(p){if(!r){for(let N=0;N<_.length;N+=1)X(i[N]);r=!0}},o(p){i=i.filter(Boolean);for(let N=0;N<i.length;N+=1)F(i[N]);r=!1},d(p){p&&b(l),p&&b(n),$(i,p),p&&b(s),p&&b(o),d=!1,a()}}}function Je(e){let l,t=e[18].name+"",n,s,o,f=e[18].matches,r=[];for(let a=0;a<f.length;a+=1)r[a]=ye(he(e,f,a));const d=a=>F(r[a],1,1,()=>{r[a]=null});return{c(){l=U("div"),n=O(t),s=S();for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){l=I(a,"DIV",{class:!0});var _=w(l);n=A(_,t),s=J(_);for(let i=0;i<r.length;i+=1)r[i].l(_);_.forEach(b),this.h()},h(){z(l,"class","week svelte-1a19ri6")},m(a,_){G(a,l,_),h(l,n),h(l,s);for(let i=0;i<r.length;i+=1)r[i].m(l,null);o=!0},p(a,_){if((!o||_[0]&8)&&t!==(t=a[18].name+"")&&Z(n,t),_[0]&14|_[1]&2){f=a[18].matches;let i;for(i=0;i<f.length;i+=1){const B=he(a,f,i);r[i]?(r[i].p(B,_),X(r[i],1)):(r[i]=ye(B),r[i].c(),X(r[i],1),r[i].m(l,null))}for(ne(),i=f.length;i<r.length;i+=1)d(i);te()}},i(a){if(!o){for(let _=0;_<f.length;_+=1)X(r[_]);o=!0}},o(a){r=r.filter(Boolean);for(let _=0;_<r.length;_+=1)F(r[_]);o=!1},d(a){a&&b(l),$(r,a)}}}function ke(e){let l,t=e[1][e[27]]+"",n,s,o,f,r;function d(){return e[9](e[21],e[26],e[32],e[22],e[23])}return{c(){l=U("p"),n=O(t),s=U("button"),o=O("X")},l(a){l=I(a,"P",{});var _=w(l);n=A(_,t),s=I(_,"BUTTON",{});var i=w(s);o=A(i,"X"),i.forEach(b),_.forEach(b)},m(a,_){G(a,l,_),h(l,n),h(l,s),h(s,o),f||(r=Q(s,"click",d),f=!0)},p(a,_){e=a,_[0]&10&&t!==(t=e[1][e[27]]+"")&&Z(n,t)},d(a){a&&b(l),f=!1,r()}}}function be(e){let l,t=e[1][e[24]]+"",n,s,o,f,r,d,a,_,i,B,p,N,k,R,L,W,H,M,v,T,P,y,C;function K(){e[6].call(r,e[26],e[22],e[23])}function V(){e[7].call(i,e[26],e[22],e[23])}function Y(){e[8].call(k,e[26],e[22],e[23])}let m=e[21].team1.kills[e[26]],g=[];for(let c=0;c<m.length;c+=1)g[c]=ke(de(e,m,c));function u(...c){return e[10](e[21],e[26],e[22],e[23],...c)}return v=new Be({props:{players:e[1],enemies:e[2][e[21].team2.id].players,add:u}}),{c(){l=U("div"),n=O(t),s=S(),o=U("p"),f=O("Alive: "),r=U("input"),d=S(),a=U("p"),_=O("Playing: "),i=U("input"),B=S(),p=U("p"),N=O("Revives: "),k=U("input"),R=S(),L=U("p"),W=O("Kills:"),H=S();for(let c=0;c<g.length;c+=1)g[c].c();M=S(),Ie(v.$$.fragment),T=S(),this.h()},l(c){l=I(c,"DIV",{class:!0});var E=w(l);n=A(E,t),s=J(E),o=I(E,"P",{});var D=w(o);f=A(D,"Alive: "),r=I(D,"INPUT",{type:!0}),D.forEach(b),d=J(E),a=I(E,"P",{});var j=w(a);_=A(j,"Playing: "),i=I(j,"INPUT",{type:!0}),j.forEach(b),B=J(E),p=I(E,"P",{});var q=w(p);N=A(q,"Revives: "),k=I(q,"INPUT",{type:!0}),q.forEach(b),R=J(E),L=I(E,"P",{});var x=w(L);W=A(x,"Kills:"),x.forEach(b),H=J(E);for(let ie=0;ie<g.length;ie+=1)g[ie].l(E);M=J(E),Ve(v.$$.fragment,E),T=J(E),E.forEach(b),this.h()},h(){z(r,"type","checkbox"),z(i,"type","checkbox"),z(k,"type","number"),z(l,"class","player svelte-1a19ri6")},m(c,E){G(c,l,E),h(l,n),h(l,s),h(l,o),h(o,f),h(o,r),r.checked=e[21].team1.alive[e[26]],h(l,d),h(l,a),h(a,_),h(a,i),i.checked=e[21].team1.playing[e[26]],h(l,B),h(l,p),h(p,N),h(p,k),le(k,e[21].team1.revives[e[26]]),h(l,R),h(l,L),h(L,W),h(l,H);for(let D=0;D<g.length;D+=1)g[D].m(l,null);h(l,M),je(v,l,null),h(l,T),P=!0,y||(C=[Q(r,"change",K),Q(i,"change",V),Q(k,"input",Y)],y=!0)},p(c,E){if(e=c,(!P||E[0]&14)&&t!==(t=e[1][e[24]]+"")&&Z(n,t),E[0]&8&&(r.checked=e[21].team1.alive[e[26]]),E[0]&8&&(i.checked=e[21].team1.playing[e[26]]),E[0]&8&&ee(k.value)!==e[21].team1.revives[e[26]]&&le(k,e[21].team1.revives[e[26]]),E[0]&10){m=e[21].team1.kills[e[26]];let j;for(j=0;j<m.length;j+=1){const q=de(e,m,j);g[j]?g[j].p(q,E):(g[j]=ke(q),g[j].c(),g[j].m(l,M))}for(;j<g.length;j+=1)g[j].d(1);g.length=m.length}const D={};E[0]&2&&(D.players=e[1]),E[0]&12&&(D.enemies=e[2][e[21].team2.id].players),E[0]&12&&(D.add=u),v.$set(D)},i(c){P||(X(v.$$.fragment,c),P=!0)},o(c){F(v.$$.fragment,c),P=!1},d(c){c&&b(l),$(g,c),we(v),y=!1,se(C)}}}function Ee(e){let l,t=e[1][e[27]]+"",n,s,o,f,r;function d(){return e[14](e[21],e[26],e[22],e[23])}return{c(){l=U("p"),n=O(t),s=U("button"),o=O("X")},l(a){l=I(a,"P",{});var _=w(l);n=A(_,t),s=I(_,"BUTTON",{});var i=w(s);o=A(i,"X"),i.forEach(b),_.forEach(b)},m(a,_){G(a,l,_),h(l,n),h(l,s),h(s,o),f||(r=Q(s,"click",d),f=!0)},p(a,_){e=a,_[0]&10&&t!==(t=e[1][e[27]]+"")&&Z(n,t)},d(a){a&&b(l),f=!1,r()}}}function Te(e){let l,t=e[1][e[24]]+"",n,s,o,f,r,d,a,_,i,B,p,N,k,R,L,W,H,M,v,T,P,y;function C(){e[11].call(r,e[26],e[22],e[23])}function K(){e[12].call(i,e[26],e[22],e[23])}function V(){e[13].call(k,e[26],e[22],e[23])}let Y=e[21].team2.kills[e[26]],m=[];for(let u=0;u<Y.length;u+=1)m[u]=Ee(pe(e,Y,u));function g(...u){return e[15](e[21],e[26],e[22],e[23],...u)}return v=new Be({props:{players:e[1],enemies:e[2][e[21].team1.id].players,add:g}}),{c(){l=U("div"),n=O(t),s=S(),o=U("p"),f=O("Alive: "),r=U("input"),d=S(),a=U("p"),_=O("Playing: "),i=U("input"),B=S(),p=U("p"),N=O("Revives: "),k=U("input"),R=S(),L=U("p"),W=O("Kills:"),H=S();for(let u=0;u<m.length;u+=1)m[u].c();M=S(),Ie(v.$$.fragment),this.h()},l(u){l=I(u,"DIV",{class:!0});var c=w(l);n=A(c,t),s=J(c),o=I(c,"P",{});var E=w(o);f=A(E,"Alive: "),r=I(E,"INPUT",{type:!0}),E.forEach(b),d=J(c),a=I(c,"P",{});var D=w(a);_=A(D,"Playing: "),i=I(D,"INPUT",{type:!0}),D.forEach(b),B=J(c),p=I(c,"P",{});var j=w(p);N=A(j,"Revives: "),k=I(j,"INPUT",{type:!0}),j.forEach(b),R=J(c),L=I(c,"P",{});var q=w(L);W=A(q,"Kills:"),q.forEach(b),H=J(c);for(let x=0;x<m.length;x+=1)m[x].l(c);M=J(c),Ve(v.$$.fragment,c),c.forEach(b),this.h()},h(){z(r,"type","checkbox"),z(i,"type","checkbox"),z(k,"type","number"),z(l,"class","player svelte-1a19ri6")},m(u,c){G(u,l,c),h(l,n),h(l,s),h(l,o),h(o,f),h(o,r),r.checked=e[21].team2.alive[e[26]],h(l,d),h(l,a),h(a,_),h(a,i),i.checked=e[21].team2.playing[e[26]],h(l,B),h(l,p),h(p,N),h(p,k),le(k,e[21].team2.revives[e[26]]),h(l,R),h(l,L),h(L,W),h(l,H);for(let E=0;E<m.length;E+=1)m[E].m(l,null);h(l,M),je(v,l,null),T=!0,P||(y=[Q(r,"change",C),Q(i,"change",K),Q(k,"input",V)],P=!0)},p(u,c){if(e=u,(!T||c[0]&14)&&t!==(t=e[1][e[24]]+"")&&Z(n,t),c[0]&8&&(r.checked=e[21].team2.alive[e[26]]),c[0]&8&&(i.checked=e[21].team2.playing[e[26]]),c[0]&8&&ee(k.value)!==e[21].team2.revives[e[26]]&&le(k,e[21].team2.revives[e[26]]),c[0]&10|c[1]&2){Y=e[21].team2.kills[e[26]];let D;for(D=0;D<Y.length;D+=1){const j=pe(e,Y,D);m[D]?m[D].p(j,c):(m[D]=Ee(j),m[D].c(),m[D].m(l,M))}for(;D<m.length;D+=1)m[D].d(1);m.length=Y.length}const E={};c[0]&2&&(E.players=e[1]),c[0]&12&&(E.enemies=e[2][e[21].team1.id].players),c[0]&12&&(E.add=g),v.$set(E)},i(u){T||(X(v.$$.fragment,u),T=!0)},o(u){F(v.$$.fragment,u),T=!1},d(u){u&&b(l),$(m,u),we(v),P=!1,se(y)}}}function ye(e){let l,t,n,s,o,f,r,d,a=e[2][e[21].team1.id].name+"",_,i,B,p,N,k,R=e[2][e[21].team2.id].name+"",L,W,H,M,v;function T(){e[5].call(s,e[22],e[23])}let P=e[2][e[21].team1.id].players,y=[];for(let m=0;m<P.length;m+=1)y[m]=be(me(e,P,m));const C=m=>F(y[m],1,1,()=>{y[m]=null});let K=e[2][e[21].team2.id].players,V=[];for(let m=0;m<K.length;m+=1)V[m]=Te(ce(e,K,m));const Y=m=>F(V[m],1,1,()=>{V[m]=null});return{c(){l=U("div"),t=U("div"),n=O("Judge: "),s=U("input"),o=S(),f=U("div"),r=U("div"),d=O("Team1: "),_=O(a),i=S();for(let m=0;m<y.length;m+=1)y[m].c();B=S(),p=U("div"),N=U("div"),k=O("Team2: "),L=O(R),W=S();for(let m=0;m<V.length;m+=1)V[m].c();this.h()},l(m){l=I(m,"DIV",{class:!0});var g=w(l);t=I(g,"DIV",{});var u=w(t);n=A(u,"Judge: "),s=I(u,"INPUT",{type:!0}),u.forEach(b),o=J(g),f=I(g,"DIV",{class:!0});var c=w(f);r=I(c,"DIV",{});var E=w(r);d=A(E,"Team1: "),_=A(E,a),E.forEach(b),i=J(c);for(let q=0;q<y.length;q+=1)y[q].l(c);c.forEach(b),B=J(g),p=I(g,"DIV",{class:!0});var D=w(p);N=I(D,"DIV",{});var j=w(N);k=A(j,"Team2: "),L=A(j,R),j.forEach(b),W=J(D);for(let q=0;q<V.length;q+=1)V[q].l(D);D.forEach(b),g.forEach(b),this.h()},h(){z(s,"type","number"),z(f,"class","team svelte-1a19ri6"),z(p,"class","team svelte-1a19ri6"),z(l,"class","match svelte-1a19ri6")},m(m,g){G(m,l,g),h(l,t),h(t,n),h(t,s),le(s,e[21].judge),h(l,o),h(l,f),h(f,r),h(r,d),h(r,_),h(f,i);for(let u=0;u<y.length;u+=1)y[u].m(f,null);h(l,B),h(l,p),h(p,N),h(N,k),h(N,L),h(p,W);for(let u=0;u<V.length;u+=1)V[u].m(p,null);H=!0,M||(v=Q(s,"input",T),M=!0)},p(m,g){if(e=m,g[0]&8&&ee(s.value)!==e[21].judge&&le(s,e[21].judge),(!H||g[0]&12)&&a!==(a=e[2][e[21].team1.id].name+"")&&Z(_,a),g[0]&14){P=e[2][e[21].team1.id].players;let u;for(u=0;u<P.length;u+=1){const c=me(e,P,u);y[u]?(y[u].p(c,g),X(y[u],1)):(y[u]=be(c),y[u].c(),X(y[u],1),y[u].m(f,null))}for(ne(),u=P.length;u<y.length;u+=1)C(u);te()}if((!H||g[0]&12)&&R!==(R=e[2][e[21].team2.id].name+"")&&Z(L,R),g[0]&14|g[1]&2){K=e[2][e[21].team2.id].players;let u;for(u=0;u<K.length;u+=1){const c=ce(e,K,u);V[u]?(V[u].p(c,g),X(V[u],1)):(V[u]=Te(c),V[u].c(),X(V[u],1),V[u].m(p,null))}for(ne(),u=K.length;u<V.length;u+=1)Y(u);te()}},i(m){if(!H){for(let g=0;g<P.length;g+=1)X(y[g]);for(let g=0;g<K.length;g+=1)X(V[g]);H=!0}},o(m){y=y.filter(Boolean);for(let g=0;g<y.length;g+=1)F(y[g]);V=V.filter(Boolean);for(let g=0;g<V.length;g+=1)F(V[g]);H=!1},d(m){m&&b(l),$(y,m),$(V,m),M=!1,v()}}}function Pe(e){let l,t,n=e[20]!=0&&Je(e);return{c(){n&&n.c(),l=ae()},l(s){n&&n.l(s),l=ae()},m(s,o){n&&n.m(s,o),G(s,l,o),t=!0},p(s,o){s[20]!=0&&n.p(s,o)},i(s){t||(X(n),t=!0)},o(s){F(n),t=!1},d(s){n&&n.d(s),s&&b(l)}}}function Le(e){let l,t,n,s=e[0]&&ve(),o=!e[0]&&ge(e);return{c(){s&&s.c(),l=S(),o&&o.c(),t=ae()},l(f){s&&s.l(f),l=J(f),o&&o.l(f),t=ae()},m(f,r){s&&s.m(f,r),G(f,l,r),o&&o.m(f,r),G(f,t,r),n=!0},p(f,r){f[0]?s||(s=ve(),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null),f[0]?o&&(ne(),F(o,1,1,()=>{o=null}),te()):o?(o.p(f,r),r[0]&1&&X(o,1)):(o=ge(f),o.c(),X(o,1),o.m(t.parentNode,t))},i(f){n||(X(o),n=!0)},o(f){F(o),n=!1},d(f){s&&s.d(f),f&&b(l),o&&o.d(f),f&&b(t)}}}const qe=!0;function Xe(e,l,t){let n=!0,s,o,f,r,d=null;Ke(async()=>{let T=await(await fetch("newData.json")).json();s=T.lastUpdate,o=T.judges,t(1,f=T.players),t(3,d=T.weeks),t(2,r=T.teams),console.log("Fetched Data:",{lastUpdate:s,judges:o,players:f,weeks:d,teams:r}),t(0,n=!1)});function a(){console.log("Get Data:",JSON.stringify({lastUpdate:s,judges:o,players:f,weeks:d,teams:r},null,4))}function _(v,T){v[T].judge=ee(this.value),t(3,d)}function i(v,T,P){T[P].team1.alive[v]=this.checked,t(3,d)}function B(v,T,P){T[P].team1.playing[v]=this.checked,t(3,d)}function p(v,T,P){T[P].team1.revives[v]=ee(this.value),t(3,d)}const N=(v,T,P,y,C)=>{v.team1.kills[T].splice(P,1),t(3,y[C].team1.kills[T]=v.team1.kills[T],d)},k=(v,T,P,y,C)=>{v.team1.kills[T].push(C),t(3,P[y].team2.kills=v.team2.kills,d);for(let K=0;K<r[v.team2.id].players.length;K++)if(console.log(r[v.team2.id].players[K],C),r[v.team2.id].players[K]===C){t(3,P[y].team2.alive[K]=!1,d);break}};function R(v,T,P){T[P].team2.alive[v]=this.checked,t(3,d)}function L(v,T,P){T[P].team2.playing[v]=this.checked,t(3,d)}function W(v,T,P){T[P].team2.revives[v]=ee(this.value),t(3,d)}return[n,f,r,d,a,_,i,B,p,N,k,R,L,W,(v,T,P,y)=>{v.team2.kills[T].splice(killIndex,1),t(3,P[y].team2.kills[T]=v.team2.kills[T],d)},(v,T,P,y,C)=>{v.team2.kills[T].push(C),t(3,P[y].team2.kills=v.team2.kills,d);for(let K=0;K<r[v.team1.id].players.length;K++)if(console.log(r[v.team1.id].players[K],C),r[v.team1.id].players[K]===C){t(3,P[y].team1.alive[K]=!1,d);break}}]}class Ce extends Ne{constructor(l){super();De(this,l,Xe,Le,Ue,{},null,[-1,-1])}}export{Ce as default,qe as prerender};