(this.webpackJsonpika=this.webpackJsonpika||[]).push([[4],{305:function(e,a,t){"use strict";t.r(a);var n=t(46),l=t(0),r=t.n(l),c=t(237),i=t(28),o=t(21),m=t(283),s=t(241),d=t(246),u=t(244),f=t(279),g=t(242),p=t(280),h=t(282),E=t(306),y=t(270),k=t.n(y),v=t(184),b=t.n(v),N=t(269),C=t.n(N),S=t(273),O=t.n(S),j=[{ad:"\xc7al\u0131\u015fma G\xfcn\xfc",kisaltma:"+"},{ad:"Hafta Tatili",kisaltma:"HT"},{ad:"Resmi Tatil",kisaltma:"RT"},{ad:"\u0130dari \u0130zin",kisaltma:"IDR"},{ad:"Cumartesi \u0130zni",kisaltma:"CI"},{ad:"Gece Zamm\u0131",kisaltma:"GZ"},{ad:"Gelmedi",kisaltma:"-"},{ad:"Yar\u0131 \xc7al\u0131\u015fma",kisaltma:"\xb1"}],x=[{ad:"1 Saat Fazla Mesai",kisaltma:"FM1"},{ad:"2 Saat Fazla Mesai",kisaltma:"FM2"},{ad:"3 Saat Fazla Mesai",kisaltma:"FM3"},{ad:"4 Saat Fazla Mesai",kisaltma:"FM4"},{ad:"5 Saat Fazla Mesai",kisaltma:"FM5"},{ad:"6 Saat Fazla Mesai",kisaltma:"FM6"},{ad:"7 Saat Fazla Mesai",kisaltma:"FM7"},{ad:"8 Saat Fazla Mesai",kisaltma:"FM8"},{ad:"9 Saat Fazla Mesai",kisaltma:"FM9"},{ad:"10 Saat Fazla Mesai",kisaltma:"FM10"}],M=Object(c.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},drawer:{width:420,maxWidth:"100%"},header:{padding:e.spacing(2,1),display:"flex",justifyContent:"space-between"},buttonIcon:{marginRight:e.spacing(1)},content:{padding:e.spacing(0,3),flexGrow:1},contentSection:{padding:e.spacing(2,0)},contentSectionHeader:{display:"flex",justifyContent:"space-between",cursor:"pointer"},contentSectionContent:{},formGroup:{padding:e.spacing(2,0)},fieldGroup:{display:"flex",alignItems:"center"},field:{marginTop:0,marginBottom:0},flexGrow:{flexGrow:1},addButton:{marginLeft:e.spacing(1)},tags:{marginTop:e.spacing(1)},minAmount:{marginRight:e.spacing(3)},maxAmount:{marginLeft:e.spacing(3)},radioGroup:{},actions:{padding:e.spacing(3),"& > * + *":{marginTop:e.spacing(2)}}}})),A=function(e){var a=e.open,t=e.onClose,c=(e.onFilter,e.className),m=e.degerguncelle,y=Object(i.a)(e,["open","onClose","onFilter","className","degerguncelle"]),v=M(),N=Object(l.useState)(!0),S=Object(n.a)(N,2),A=S[0],w=S[1],F=Object(l.useState)(!1),L=Object(n.a)(F,2),T=L[0],z=L[1],I=Object(l.useState)(j[0].kisaltma),R=Object(n.a)(I,2),G=R[0],H=R[1];return r.a.createElement(d.a,{anchor:"right",classes:{paper:v.drawer},onClose:t,open:a,variant:"temporary"},r.a.createElement("div",Object.assign({},y,{className:Object(o.a)(v.root,c)}),r.a.createElement("div",{className:v.header},r.a.createElement(s.a,{onClick:t},r.a.createElement(C.a,{className:v.buttonIcon}),"Kapat")),r.a.createElement("div",{className:v.content},r.a.createElement("div",{className:v.contentSection},r.a.createElement("div",{className:v.contentSectionHeader,onClick:function(){w((function(e){return!e})),z(!1)}},r.a.createElement(u.a,{variant:"h5"},"H\u0131zl\u0131 \u0130\u015flemler"),A?r.a.createElement(k.a,null):r.a.createElement(b.a,null)),r.a.createElement(f.a,null),r.a.createElement(g.a,{in:A},r.a.createElement("div",{className:v.contentSectionContent},r.a.createElement("div",{className:v.formGroup},r.a.createElement("div",{className:v.fieldGroup},r.a.createElement(p.a,{className:v.radioGroup,name:"projectStatus",onChange:function(e){return H(e.target.value)},value:G},j.map((function(e,a){return r.a.createElement(h.a,{control:r.a.createElement(E.a,{color:"primary"}),key:a,label:"".concat(e.ad," (").concat(e.kisaltma,")"),value:e.kisaltma})})))))))),r.a.createElement("div",{className:v.contentSection},r.a.createElement("div",{className:v.contentSectionHeader,onClick:function(){z((function(e){return!e})),w(!1)}},r.a.createElement(u.a,{variant:"h5"},"Fazla Mesai"),T?r.a.createElement(k.a,null):r.a.createElement(b.a,null)),r.a.createElement(f.a,null),r.a.createElement(g.a,{in:T},r.a.createElement("div",{className:v.contentSectionContent},r.a.createElement("div",{className:v.formGroup},r.a.createElement("div",{className:v.fieldGroup},r.a.createElement(p.a,{className:v.radioGroup,name:"projectStatus",onChange:function(e){return H(e.target.value)},value:G},x.map((function(e,a){return r.a.createElement(h.a,{control:r.a.createElement(E.a,{color:"primary"}),key:a,label:"".concat(e.ad," (").concat(e.kisaltma,")"),value:e.kisaltma})}))))))))),r.a.createElement("div",{className:v.actions},r.a.createElement(s.a,{fullWidth:!0,onClick:function(){m(""),t()},variant:"contained"},r.a.createElement(O.a,{className:v.buttonIcon}),"SE\xc7\u0130L\u0130 ALANLARI TEM\u0130ZLE"),r.a.createElement(s.a,{color:"primary",fullWidth:!0,onClick:function(){m(G),t()},variant:"contained"},"UYGULA"))))},w=Object(c.a)((function(){return{root:{}}})),F=function(e){var a=e.className,t=e.onFilter,c=e.degerguncelle,d=e.otamatikDoldur,u=(e.ayDegistir,e.tumAlanlariTemizle),f=Object(i.a)(e,["className","onFilter","degerguncelle","otamatikDoldur","ayDegistir","tumAlanlariTemizle"]),g=Object(l.useState)(!1),p=Object(n.a)(g,2),h=p[0],E=p[1],y=w();return r.a.createElement("div",Object.assign({},f,{className:Object(o.a)(y.root,a)}),r.a.createElement(m.a,{container:!0,spacing:3},r.a.createElement(m.a,{container:!0,item:!0,spacing:3},r.a.createElement(m.a,{item:!0,xs:!0},r.a.createElement(s.a,{color:"primary",onClick:d,variant:"contained"},"Otamatik Doldur")),r.a.createElement(m.a,{item:!0},r.a.createElement(s.a,{color:"primary",onClick:function(){return c("+")},variant:"outlined"},"\xc7ALI\u015eMA G\xdcN\xdc (+)")),r.a.createElement(m.a,{item:!0},r.a.createElement(s.a,{color:"primary",onClick:function(){return c("HT")},variant:"outlined"},"HAFTA TAT\u0130L\u0130 (HT)")),r.a.createElement(m.a,{item:!0},r.a.createElement(s.a,{color:"primary",onClick:function(){return c("-")},variant:"outlined"},"GELMEDi (-)")),r.a.createElement(m.a,{item:!0},r.a.createElement(s.a,{color:"secondary",onClick:u,variant:"outlined"},"T\xdcM ALANLARI TEM\u0130ZLE")),r.a.createElement(m.a,{item:!0},r.a.createElement(s.a,{color:"primary",onClick:function(){E(!0)},variant:"contained"},"H\u0131zl\u0131 \u0130\u015flemler")))),r.a.createElement(A,{degerguncelle:c,onClose:function(){E(!1)},onFilter:t,open:h}))},L=t(268),T=t(14),z=t(288),I=t(289),R=t(290),G=t(291),H=t(292),D=t(293),Y=t(294),U=t(295),K=t(296),P=t(308),Z=t(287),W=t(307),B=t(302),J=t(304),q=t(275),Q=t(274),V=t.n(Q),X=Object(c.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}})),$=function(e){var a=e.date,t=e.selectedDays,c=e.onChange,i=X(),o=Object(l.useRef)(null),m=Object(l.useState)(!1),d=Object(n.a)(m,2),u=d[0],f=d[1];return r.a.createElement(l.Fragment,null,r.a.createElement(s.a,{onClick:function(){f(!0)},ref:o},"Hafta Se\xe7",r.a.createElement(V.a,null)),r.a.createElement(q.a,{anchorEl:o.current,className:i.menu,onClose:function(){f(!1)},open:u,PaperProps:{style:{width:250}}},0!==a.weeks[0].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[0].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(0)}}),label:"1. Hafta"})),0!==a.weeks[1].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[1].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(1)}}),label:"2. Hafta"})),0!==a.weeks[2].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[2].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(2)}}),label:"3. Hafta"})),0!==a.weeks[3].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[3].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(3)}}),label:"4. Hafta"})),0!==a.weeks[4].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[4].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(4)}}),label:"5. Hafta"})),0!==a.weeks[5].length&&r.a.createElement(Z.a,{className:i.menuItem},r.a.createElement(h.a,{className:i.formControlLabel,control:r.a.createElement(W.a,{checked:a.weeks[5].every((function(e){return t.includes(e)})),color:"primary",onClick:function(){c(5)}}),label:"6. Hafta"}))))},_=Object(c.a)((function(e){return{content:{padding:0},tableContainer:{minWidth:700},nameCell:{display:"flex",alignItems:"center"},avatar:{height:42,width:42,marginRight:e.spacing(1)},actions:{padding:e.spacing(1),justifyContent:"flex-end"}}})),ee=function(e){var a=e.className,t=e.persons,l=e.selectedPersons,c=e.setSelectedPersons,i=e.selectedDays,m=e.setSelectedDays,s=e.date,d=Object(T.a)(),u=_();var f=r.a.useRef(null),g=r.a.useState(0),p=Object(n.a)(g,2),E=p[0],y=p[1];return r.a.useEffect((function(){y(f.current.offsetWidth)}),[]),r.a.createElement("div",{className:Object(o.a)(u.root,a)},r.a.createElement(z.a,null,r.a.createElement(I.a,{className:u.content},r.a.createElement(R.a,{className:u.tableContainer},r.a.createElement(G.a,{padding:"none"},r.a.createElement(H.a,null,r.a.createElement(D.a,null,r.a.createElement(Y.a,{colSpan:5,padding:"default"},r.a.createElement(U.a,{className:u.formControl,color:"primary",fullWidth:!0,size:"small",variant:"outlined"},r.a.createElement(K.a,{id:"demo-simple-select-outlined-label",ref:f},"Kurum"),r.a.createElement(P.a,{id:"demo-simple-select-outlined",labelId:"demo-simple-select-outlined-label",labelWidth:E,value:0},r.a.createElement(Z.a,{value:0},"ANKARA A\xc7IK CEZA \u0130NFAZ KURUMU"),r.a.createElement(Z.a,{value:1},"ESK\u0130\u015eEH\u0130R 1 NOLU A\xc7IK CEZA \u0130NFAZ KURUMU"),r.a.createElement(Z.a,{value:2},"\u0130ZM\u0130R 2 NOLU T T\u0130P\u0130 KAPALI CEZA \u0130NFAZ KURUMU")))),r.a.createElement(Y.a,{colSpan:s.days.length,style:{paddingLeft:10,paddingRight:10}},r.a.createElement($,{date:s,onChange:function(e){var a=Object(L.a)(i),t=!0,n=!1,l=void 0;try{for(var r,c=s.weeks[e][Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var o=r.value;-1===i.indexOf(o)&&(a=a.concat(i,o))}}catch(d){n=!0,l=d}finally{try{t||null==c.return||c.return()}finally{if(n)throw l}}m(a)},selectedDays:i}),r.a.createElement(h.a,{control:r.a.createElement(W.a,{checked:i.length===s.days.length,color:"primary",indeterminate:i.length>0&&i.length<s.days.length,onChange:function(e){var a=e.target.checked?s.days.map((function(e,a){return a})):[];m(a)}}),label:"T\xfcm G\xfcnler"}))),r.a.createElement(D.a,null,r.a.createElement(Y.a,{align:"center",colSpan:5,padding:"default",rowSpan:2},r.a.createElement(B.a,{fullWidth:!0,label:"Ki\u015filerde Ara",size:"small",type:"search",variant:"outlined"})),s.days.map((function(e){return r.a.createElement(Y.a,{align:"center",key:e.index},r.a.createElement(W.a,{checked:-1!==i.indexOf(e.index),color:"primary",onChange:function(){return function(e){var a=i.indexOf(e);console.log("id su:"+e),console.log("selectedIndex su:"+a);var t=[];-1===a?t=t.concat(i,e):0===a?t=t.concat(i.slice(1)):a===i.length-1?t=t.concat(i.slice(0,-1)):a>0&&(t=t.concat(i.slice(0,a),i.slice(a+1))),m(t)}(e.index)},size:"small",value:-1!==i.indexOf(e.index)}))}))),r.a.createElement(D.a,null,s.days.map((function(e,a){return r.a.createElement(Y.a,{align:"center",key:a,style:{backgroundColor:e.off?d.palette.primary.light:d.palette.secondary.light}},e.order)}))),r.a.createElement(D.a,null,r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(W.a,{checked:l.length===t.length,color:"primary",indeterminate:l.length>0&&l.length<t.length,onChange:function(e){var a=e.target.checked?t.map((function(e,a){return a})):[];c(a)}})),r.a.createElement(Y.a,{align:"center",padding:"checkbox"},"No"),r.a.createElement(Y.a,{style:{paddingLeft:10,paddingRight:10}},"T.C. No"),r.a.createElement(Y.a,{padding:"none",style:{paddingLeft:10,paddingRight:10}},"Ad Soyad"),r.a.createElement(Y.a,{padding:"checkbox",style:{paddingRight:10,paddingLeft:10}},"\xc7al\u0131\u015fma G\xfcn\xfc"),s.days.map((function(e,a){return r.a.createElement(Y.a,{align:"center",key:a,style:{backgroundColor:e.off?d.palette.primary.light:d.palette.secondary.light}},e.short)})))),r.a.createElement(J.a,null,t.map((function(e,a){return r.a.createElement(D.a,{hover:!0,key:a,selected:-1!==l.indexOf(a)},r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(W.a,{checked:-1!==l.indexOf(a),color:"primary",onChange:function(e){return function(e,a){var t=l.indexOf(a),n=[];-1===t?n=n.concat(l,a):0===t?n=n.concat(l.slice(1)):t===l.length-1?n=n.concat(l.slice(0,-1)):t>0&&(n=n.concat(l.slice(0,t),l.slice(t+1))),c(n)}(0,a)},value:-1!==l.indexOf(a)})),r.a.createElement(Y.a,{align:"center"},a+1),r.a.createElement(Y.a,{style:{paddingLeft:10,paddingRight:10}},e.tcNo),r.a.createElement(Y.a,{style:{paddingLeft:10,paddingRight:10}},"".concat(e.ad," ").concat(e.soyad)),r.a.createElement(Y.a,{align:"center"},e.toplamCalismaSaati),s.days.map((function(a,t){return r.a.createElement(Y.a,{align:"center",key:t,style:{backgroundColor:a.off&&d.palette.primary.light}},e.puantaj[s.year][s.monthName][t])})))}))))))))},ae=t(69),te=t.n(ae),ne=function(e,a){var t=Object(L.a)(Array(te()("".concat(e," ").concat(a),"YYYY-MM").daysInMonth()).keys()).map((function(t,n){var l=te()("".concat(e," ").concat(a),"YYYY-MM").date(t+1);return{day:l.format("DD-MM-YYYY"),sunday:"Pazar"===l.format("dddd"),off:"Pazar"===l.format("dddd"),weekend:"Pazar"===l.format("dddd")||"Cumartesi"===l.format("dddd"),index:n,order:l.format("DD"),short:l.format("dd")}})),n=t.findIndex((function(e){return e.sunday}));return{days:t,year:e,monthName:te()("".concat(a),"MM").format("MMMM"),firstSunday:n,weeks:function(){for(var e={0:[],1:[],2:[],3:[],4:[],5:[]},a=[],l=0;l<n;l++)a.push(l);var r=!0,c=!1,i=void 0;try{for(var o,m=t[Symbol.iterator]();!(r=(o=m.next()).done);r=!0){var s=o.value;a.includes(s.index)&&e[0].push(s.index),[a.length+1,a.length+2,a.length+3,a.length+4,a.length+5,a.length+6].includes(s.index)&&e[1].push(s.index),[a.length+8,a.length+9,a.length+10,a.length+11,a.length+12,a.length+13].includes(s.index)&&e[2].push(s.index),[a.length+20,a.length+15,a.length+16,a.length+17,a.length+18,a.length+19].includes(s.index)&&e[3].push(s.index),[a.length+27,a.length+22,a.length+23,a.length+24,a.length+25,a.length+26].includes(s.index)&&e[4].push(s.index),[a.length+34,a.length+29,a.length+30,a.length+31,a.length+32,a.length+33].includes(s.index)&&e[5].push(s.index)}}catch(d){c=!0,i=d}finally{try{r||null==m.return||m.return()}finally{if(c)throw i}}return e}()}},le=[{tcNo:16181286960,ad:"Hasan",soyad:"Aktas",toplamCalismaSaati:"50",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}},{tcNo:2342344543,ad:"Berk",soyad:"Yaman",toplamCalismaSaati:"49",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}},{tcNo:34534534435,ad:"Arda",soyad:"Selim Mahut Uslu",toplamCalismaSaati:"24",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}},{tcNo:16181286960,ad:"Hasan",soyad:"Aktas",toplamCalismaSaati:"50",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}},{tcNo:2342344543,ad:"Berk",soyad:"Yaman",toplamCalismaSaati:"49",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}},{tcNo:34534534435,ad:"Arda",soyad:"Selim",toplamCalismaSaati:"24",puantaj:{2020:{Ocak:[],"\u015eubat":[],Mart:[]}}}],re=Object(c.a)((function(e){return{root:{padding:e.spacing(3)},results:{marginTop:e.spacing(3)},filter:{marginTop:e.spacing(3)}}})),ce=function(){var e=re(),a=Object(l.useState)(ne(2020,"01")),t=Object(n.a)(a,2),c=t[0],i=t[1],o=Object(l.useState)([]),m=Object(n.a)(o,2),s=m[0],d=m[1],u=Object(l.useState)([]),f=Object(n.a)(u,2),g=f[0],p=f[1],h=Object(l.useState)([]),E=Object(n.a)(h,2),y=E[0],k=E[1],v=Object(l.useState)(le),b=Object(n.a)(v,2),N=b[0],C=b[1];return r.a.createElement("div",{className:e.root},r.a.createElement(F,{ayDegistir:function(e,a){i(ne(e,a))},degerguncelle:function(e){var a=N.map((function(a,t){if(s.includes(t)){var n=!0,l=!1,r=void 0;try{for(var i,o=g[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var m=i.value;a.puantaj[c.year][c.monthName][m]=e}}catch(d){l=!0,r=d}finally{try{n||null==o.return||o.return()}finally{if(l)throw r}}}return a}));C(a),d([]),p([])},otamatikDoldur:function(){var e=N.map((function(e,a){var t=!0,n=!1,l=void 0;try{for(var r,i=c.days[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;e.puantaj[c.year][c.monthName][o.index]=o.off?"HT":"+"}}catch(m){n=!0,l=m}finally{try{t||null==i.return||i.return()}finally{if(n)throw l}}return e}));C(e),d([]),p([])},tumAlanlariTemizle:function(){var e=N.map((function(e,a){var t=!0,n=!1,l=void 0;try{for(var r,i=c.days[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;e.puantaj[c.year][c.monthName][o.index]=""}}catch(m){n=!0,l=m}finally{try{t||null==i.return||i.return()}finally{if(n)throw l}}return e}));C(e),d([]),p([])}}),N&&r.a.createElement(ee,{className:e.results,date:c,persons:N,selectedDays:g,selectedPersons:s,selectedWeek:y,setSelectedDays:p,setSelectedPersons:d,setSelectedWeek:k}))};t.d(a,"default",(function(){return ce}))}}]);
//# sourceMappingURL=4.6ecb2742.chunk.js.map