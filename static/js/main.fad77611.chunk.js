(this.webpackJsonpcovidpakistan=this.webpackJsonpcovidpakistan||[]).push([[0],{112:function(e,t,a){e.exports={"leaflet-tile":"Maps_leaflet-tile__2SX3M",map:"Maps_map__3aqoo","slide-in-bottom":"Maps_slide-in-bottom__3gIi9"}},147:function(e,t,a){e.exports={anim:"CovidCard_anim__Hhxks","slide-in-right":"CovidCard_slide-in-right__2D1s7"}},149:function(e,t,a){e.exports=a.p+"static/media/1.db21b5c2.png"},150:function(e,t,a){e.exports=a.p+"static/media/2.071f690c.png"},151:function(e,t,a){e.exports=a.p+"static/media/3.746361ab.png"},171:function(e,t,a){e.exports=a(228)},193:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),l=a(70),c=a(47),s=a(71),u=a(50),m={loggedIn:!1,isAdmin:!1,loggingAction:!1,error:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGING_ACTION":return Object(u.a)({},e,{loggingAction:!0});case"LOGGED_IN":return Object(u.a)({},e,{loggedIn:!0,loggingAction:!1,isAdmin:t.payload});case"LOGGED_OUT":return Object(u.a)({},e,{loggedIn:!1,loggingAction:!1,isAdmin:!1});case"ERROR":return Object(u.a)({},e,{error:{title:t.payload.title,text:t.payload.text}});case"RESET":return Object(u.a)({},e,{error:null});default:return e}},p=a(139),h=a(27);a(102),a(103);h.initializeApp({apiKey:"AIzaSyBRRRb0gvyT2-BBfb7FuGcAx_KFNu3u0r4",authDomain:"fightagainstcoronapakistan.firebaseapp.com",databaseURL:"https://fightagainstcoronapakistan.firebaseio.com",projectId:"fightagainstcoronapakistan",storageBucket:"fightagainstcoronapakistan.appspot.com",messagingSenderId:"1083798415365",appId:"1:1083798415365:web:3e6485acc3935dec9e946c",measurementId:"G-7ZLPZET4MS"});var f=Object(s.c)(d,Object(s.a)(p.a)),g=a(78),E=a(271),v=a(296),b=a(79),y=(a(193),a(34)),C=a(35),S=a(37),O=a(39),_=a(49),k=a(24),w=a(124),x=a(278),j=a(279),I=a(51),N=a(281),A=a(280),D=a(143),G=a.n(D),R=a(109),F=a.n(R),P=a(273),T=a(144),L=a.n(T),M=a(145),U=a.n(M),W=a(108),B=a.n(W),X=a(274),q=a(276),H=a(277),z=a(303),$=a(282),Z=a(283),V=(a(127),a(62)),J=a.n(V),K=J.a.create({baseURL:"https://fightagainstcoronapakistan.firebaseio.com"}),Q=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250,cursor:"pointer"}}})),Y=Object(w.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function ee(){var e=Y();return r.a.createElement("div",{className:e.root},r.a.createElement(P.a,{color:"secondary"}))}var te=Object(c.b)((function(e){return{loggedIn:e.loggedIn,isAdmin:e.isAdmin,loggingAction:e.loggingAction,error:e.error}}),(function(e){return{logOut:function(){return e((function(e,t){h.auth().signOut().then((function(t){return e({type:"LOGGED_OUT"})})).catch((function(e){}))}))},resetError:function(){return e((function(e,t){return e({type:"RESET"})}))}}}))(Object(_.g)((function(e){var t="Home";switch(e.location.pathname){case"/provide-a-service":t="Provide a service";break;case"/login":t="Sign in";break;case"/":t="Home";break;case"/volunteers":t="See Volunteers";break;default:t="Home"}var a=Q(),n=r.a.useState(!1),i=Object(k.a)(n,2),o=i[0],l=i[1],c=e.isAdmin?r.a.createElement(X.a,{onClick:function(){return e.history.push("/volunteers")}},r.a.createElement(q.a,null,r.a.createElement(B.a,null)),r.a.createElement(H.a,null,"Volunteers")):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(x.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(A.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return l(!0)}},r.a.createElement(G.a,null)),r.a.createElement(I.a,{variant:"h6",className:a.title},t),e.isAdmin?r.a.createElement(B.a,null):null,e.loggingAction?r.a.createElement(ee,null):e.loggedIn?r.a.createElement(N.a,{color:"inherit",onClick:function(){return e.logOut()}},"Sign Out"):r.a.createElement(N.a,{color:"inherit",onClick:function(){return e.history.push("/login")}},"Sign In")))),r.a.createElement(z.a,{anchor:"left",open:o,onClose:function(){return l(!1)},onOpen:function(){return l(!0)}},r.a.createElement("div",{className:a.list,role:"presentation",onClick:function(){return l(!1)},onKeyDown:function(){return l(!1)}},r.a.createElement($.a,null,r.a.createElement(X.a,{onClick:function(){return e.history.push("/")}},r.a.createElement(q.a,null,r.a.createElement(L.a,null)),r.a.createElement(H.a,null,"Home Page")),r.a.createElement(X.a,{onClick:function(){return e.history.push("/provide-a-service")}},r.a.createElement(q.a,null,r.a.createElement(U.a,null)),r.a.createElement(H.a,null,"Provide a Service"))),r.a.createElement(Z.a,null),c,e.loggingAction?r.a.createElement(ee,null):e.loggedIn?r.a.createElement($.a,{onClick:function(){return e.logOut()}},r.a.createElement(X.a,null,r.a.createElement(q.a,null,r.a.createElement(F.a,null)),r.a.createElement(H.a,null,"Sign out"))):r.a.createElement($.a,{onClick:function(){return e.history.push("/login")}},r.a.createElement(X.a,null,r.a.createElement(q.a,null,r.a.createElement(F.a,null)),r.a.createElement(H.a,null,"Sign in"))))))}))),ae=a(94),ne=a(304),re=a(292),ie=a(301),oe=a(284),le=a(285),ce=a(147),se=a.n(ce),ue=function(e){return parseInt(e.replace(/,/g,""))},me=function(e){return r.a.createElement(oe.a,{variant:"outlined",key:e.country_name,className:se.a.anim},r.a.createElement(le.a,null,r.a.createElement(I.a,{color:"textSecondary",gutterBottom:!0},e.country_name),r.a.createElement(I.a,{variant:"body2"},"Cases: ",e.cases),ue(e.new_cases)?r.a.createElement(I.a,{variant:"body2"},"New cases: ",e.new_cases,","," ",(ue(e.new_cases)/ue(e.cases)*100).toFixed(2)+"%"):null,ue(e.deaths)?r.a.createElement(I.a,null,"Deaths: ",e.deaths,","," ",(ue(e.deaths)/ue(e.cases)*100).toFixed(2)+"%"):null,ue(e.new_deaths)?r.a.createElement(I.a,{variant:"body2"},"New deaths: ",e.new_deaths,","," ",(ue(e.new_deaths)/ue(e.deaths)*100).toFixed(2)+"%"):null,ue(e.serious_critical)?r.a.createElement(I.a,{variant:"body2"},"Critical: ",e.serious_critical,","," ",(ue(e.serious_critical)/ue(e.cases)*100).toFixed(2)+"%"):null,ue(e.total_recovered)?r.a.createElement(I.a,{variant:"body2"},"Recovered: ",e.total_recovered,","," ",(ue(e.total_recovered)/ue(e.cases)*100).toFixed(2)+"%"):null,e.region&&r.a.createElement(I.a,{variant:"body2"},"Region: ",e.region,r.a.createElement("br",null))))},de=a(21),pe=a.n(de),he=a(148),fe=a(308),ge=a(309),Ee=a(291),ve=a(310),be=(a(224),a(112)),ye=a.n(be),Ce=a(286),Se=a(287),Oe=a(288),_e=a(289),ke=a(290);function we(e){var t=function(e){return parseInt(e.replace(/,/g,""))},a=r.a.useState(!0),n=Object(k.a)(a,2),i=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(Ce.a,{open:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Se.a,{id:"alert-dialog-title"},e.country_name),r.a.createElement(Oe.a,null,r.a.createElement(_e.a,{id:"alert-dialog-description"},t(e.new_cases)?r.a.createElement(I.a,{variant:"body2"},"New cases: ",e.new_cases,","," ",(t(e.new_cases)/t(e.cases)*100).toFixed(2)+"%"):null,t(e.deaths)?r.a.createElement(I.a,null,"Deaths: ",e.deaths,","," ",(t(e.deaths)/t(e.cases)*100).toFixed(2)+"%"):null,t(e.new_deaths)?r.a.createElement(I.a,{variant:"body2"},"New deaths: ",e.new_deaths,","," ",(t(e.new_deaths)/t(e.deaths)*100).toFixed(2)+"%"):null,t(e.serious_critical)?r.a.createElement(I.a,{variant:"body2"},"Critical: ",e.serious_critical,","," ",(t(e.serious_critical)/t(e.cases)*100).toFixed(2)+"%"):null,t(e.total_recovered)?r.a.createElement(I.a,{variant:"body2"},"Recovered: ",e.total_recovered,","," ",(t(e.total_recovered)/t(e.cases)*100).toFixed(2)+"%"):null,e.region&&r.a.createElement(I.a,{variant:"body2"},"Region: ",e.region,r.a.createElement("br",null)))),r.a.createElement(ke.a,null,r.a.createElement(N.a,{onClick:function(){o(!1),e.close()},color:"primary",autoFocus:!0},e.buttonText?e.buttonText:"Close"))))}delete pe.a.Icon.Default.prototype._getIconUrl,pe.a.Icon.Default.mergeOptions({iconRetinaUrl:a(225),iconUrl:a(226),shadowUrl:a(227)});var xe=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).provider=new he.EsriProvider,e.state={results:[]},e.closePopusOnClick=function(){e.popup.current.leafletElement.options.leaflet.map.closePopup()},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.popup=r.a.createRef(),this.props.stats.map((function(t){return e.provider.search({query:t.country_name}).then((function(a){if(a[0]){var n=Object(u.a)({},t,{coords:[a[0].y,a[0].x]});e.setState((function(e){return{results:[].concat(Object(ae.a)(e.results),[n])}}))}}))}))}},{key:"render",value:function(){var e=this,t=(new Date).getHours(),a=t>6&&t<20;return r.a.createElement(fe.a,{center:[0,0],zoom:2,style:{height:"400px"},minZoom:2,className:ye.a.map},r.a.createElement(ge.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",noWrap:!0,className:a?null:ye.a["leaflet-tile"]}),this.state.results.map((function(t,a){return r.a.createElement(Ee.a,{position:t.coords,key:a},r.a.createElement(ve.a,{ref:e.popup},r.a.createElement(we,Object.assign({},t,{close:e.closePopusOnClick}))))})))}}]),a}(r.a.Component),je=a(95),Ie=a.n(je),Ne=a(149),Ae=a.n(Ne),De=a(150),Ge=a.n(De),Re=a(151),Fe=a.n(Re),Pe=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={country:"None",selectedStats:[],allCountries:[],countriesStats:[],___isSelectorOpen:!1,randomBin:0},e.getGeoInfo=function(){J.a.get("https://ipapi.co/json/").then((function(t){var a=t.data;e.setState({country:a.country_name})})).catch((function(e){console.log(e)}))},e.getAllCountries=function(){J()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"6031df45bfmshc5765d0ea25d076p1365efjsne5a49e4220bd"}}).then((function(t){e.setState({allCountries:t.data.affected_countries})})).catch((function(e){console.log(e)}))},e.fetchData=function(){J()({method:"GET",url:"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"6031df45bfmshc5765d0ea25d076p1365efjsne5a49e4220bd"}}).then((function(t){e.setState({countriesStats:t.data.countries_stat}),e.renderData(e.state.country)}))},e.changeHandler=function(t){e.renderData(t.target.value)},e.renderData=function(t){if("None"!==t){e.setState({country:t});var a=e.state.countriesStats.filter((function(e){return e.country_name===t}));e.setState({selectedStats:Object(ae.a)(a)})}else e.setState({selectedStats:{},country:t})},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.getAllCountries(),this.fetchData(),this.getGeoInfo(),this.setState({randomBin:Math.floor(10*Math.random())%3})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{src:2===this.state.randomBin?Fe.a:0===this.state.randomBin?Ae.a:Ge.a,className:Ie.a.imgLeft,style:{cursor:"pointer"},onClick:function(){return e.props.history.push("/provide-a-service")}}),r.a.createElement("div",{className:Ie.a.main},r.a.createElement(re.a,null,r.a.createElement(ne.a,null,"Country"),r.a.createElement(ie.a,{native:!0,value:this.state.country,onChange:function(t){return e.changeHandler(t)}},r.a.createElement("option",{value:"None"},"None"),this.state.allCountries.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))),r.a.createElement("div",{className:Ie.a.cards},this.state.selectedStats.map((function(e,t){return r.a.createElement(me,Object.assign({},e,{key:t}))}))),this.state.countriesStats.length>0&&r.a.createElement(xe,{stats:this.state.countriesStats})))}}]),a}(r.a.Component),Te=Object(_.g)(Pe),Le=a(306),Me=a(307),Ue=a(298),We=a(297),Be=a(113),Xe=a.n(Be),qe=a(295);function He(e){return r.a.createElement("div",null,r.a.createElement(Ce.a,{open:!0,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(Se.a,{id:"alert-dialog-title"},e.title),r.a.createElement(Oe.a,null,r.a.createElement(_e.a,{id:"alert-dialog-description"},e.text)),r.a.createElement(ke.a,null,r.a.createElement(N.a,{onClick:e.accept,color:"primary",autoFocus:!0},e.buttonText?e.buttonText:"Try again"))))}var ze=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function $e(e){var t=ze();return r.a.createElement(qe.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(Le.a,{className:t.avatar},r.a.createElement(Xe.a,null)),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:t.form,autoComplete:"on"},r.a.createElement(We.a,{container:!0,spacing:2},r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Me.a,{autoComplete:"name",name:"Name",variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"Name",autoFocus:!0,value:e.name.val,onChange:function(t){return e.name.fn(t)}})),r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Me.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:e.email.val,onChange:function(t){return e.email.fn(t)}})),r.a.createElement(We.a,{item:!0,xs:12},r.a.createElement(Me.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:e.pass.val,onChange:function(t){return e.pass.fn(t)}})),r.a.createElement(We.a,{item:!0,xs:12})),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){return e.submit()},disabled:!e.validity},"Sign Up"),r.a.createElement(We.a,{container:!0,justify:"flex-end"},r.a.createElement(We.a,{item:!0},r.a.createElement(Ue.a,{onClick:function(){return e.switchSignState()},variant:"body2",style:{cursor:"pointer"}},"Already have an account? Sign in"))))))}var Ze=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Ve(e){var t=Ze();return r.a.createElement(qe.a,{component:"main",maxWidth:"xs"},r.a.createElement(v.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(Le.a,{className:t.avatar},r.a.createElement(Xe.a,null)),r.a.createElement(I.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0},r.a.createElement(Me.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:e.email.val,onChange:function(t){return e.email.fn(t)}}),r.a.createElement(Me.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:e.pass.val,onChange:function(t){return e.pass.fn(t)}}),r.a.createElement(N.a,{fullWidth:!0,variant:"contained",color:"primary",className:t.submit,onClick:function(){return e.submit()},disabled:!e.validity},"Sign In"),r.a.createElement(We.a,{container:!0},r.a.createElement(We.a,{item:!0},r.a.createElement(Ue.a,{onClick:function(){return e.switchSignState()},style:{cursor:"pointer"},variant:"body2"},"Don't have an account? Sign Up"))))))}var Je=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={signIn:!0,name:"",pass:"",email:""},e.validateSignIn=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(e.state.email)&&/^(?=.*\d).{4,8}$/.test(e.state.pass)},e.validateSignUp=function(){return e.state.name.length&&e.validateSignIn()},e.updateEmail=function(t){e.setState({email:t.target.value})},e.updatePass=function(t){e.setState({pass:t.target.value})},e.updateName=function(t){e.setState({name:t.target.value})},e.switchSignState=function(){e.setState((function(e){return{signIn:!e.signIn}}))},e.submit=function(){e.state.signIn?e.props.signInEmail(e.state.email,e.state.pass):e.props.signUpEmail(e.state.email,e.state.pass,e.state.name)},e}return Object(C.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.error?r.a.createElement(He,{title:this.props.error.title,text:this.props.error.text,accept:function(){return e.props.resetError()}}):null,this.state.signIn?r.a.createElement(Ve,{switchSignState:this.switchSignState,pass:{fn:this.updatePass,val:this.state.pass},email:{fn:this.updateEmail,val:this.state.email},submit:this.submit,validity:this.validateSignIn()}):r.a.createElement($e,{switchSignState:this.switchSignState,pass:{fn:this.updatePass,val:this.state.pass},email:{fn:this.updateEmail,val:this.state.email},name:{fn:this.updateName,val:this.state.name},submit:this.submit,validity:this.validateSignUp()}))}}]),a}(r.a.Component),Ke=Object(c.b)((function(e){return{loggedIn:e.loggedIn,error:e.error}}),(function(e){return{signInEmail:function(t,a){return e((n=t,r=a,console.log("SIGNIN"),function(e,t){h.auth().setPersistence(h.auth.Auth.Persistence.LOCAL).then((function(){h.auth().signInWithEmailAndPassword(n,r).then((function(t){return e({type:"LOGGED_IN"})})).catch((function(t){var a=t.code,n=t.message;return e({type:"ERROR",payload:{title:a,text:n}})}))}))}));var n,r},signUpEmail:function(t,a,n){return e(function(e,t,a){return function(n,r){return h.auth().createUserWithEmailAndPassword(e,t).then((function(e){e.user.updateProfile({displayName:a})})).catch((function(e){var t=e.code,a=e.message;return n({type:"ERROR",payload:{title:t,text:a}})})),n({type:"LOGGED_IN"})}}(t,a,n))},resetError:function(){return e((function(e,t){return e({type:"RESET"})}))}}}))(Je),Qe=a(299),Ye=function(e){var t=[];return e.helpRations&&t.push("Dry Rations"),e.helpMoney&&t.push("Monetary"),e.helpFood&&t.push("Cooked Food"),r.a.createElement(oe.a,{variant:"outlined",key:e.CNIC},r.a.createElement(le.a,null,r.a.createElement(I.a,{color:"textSecondary",gutterBottom:!0},"Name: ",e.name),r.a.createElement(I.a,{variant:"body2"},"CNIC: ",e.CNIC),r.a.createElement(I.a,{variant:"body2"},"Contact: ",e.ContactNumber),r.a.createElement(I.a,{variant:"body2"},"E-mail: ",e.email),r.a.createElement(I.a,{variant:"body2"},"Location: ",e.location),t.length>0&&r.a.createElement(I.a,{variant:"body2"},"Help Type: ",t.join(", "))),r.a.createElement(Qe.a,null,r.a.createElement(N.a,{color:"primary",target:"_blank",onClick:function(){return window.open("mailto:".concat(e.email),"_blank")}},"Send an e-mail"),r.a.createElement(N.a,{color:"primary",target:"_blank",onClick:function(){return window.open("tel:".concat(e.ContactNumber),"_blank")}},"Call")))},et=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e.componentDidMount=function(){var t=[];h.auth().onAuthStateChanged((function(a){a&&h.database().ref("volunteers").on("value",(function(a){for(var n in Object.keys(a.val()))t.push(a.val()[Object.keys(a.val())[n]]);e.setState({data:t})}))}))},e}return Object(C.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.data.map((function(e,t){return r.a.createElement(Ye,Object.assign({},e,{key:t}))})))}}]),a}(r.a.Component),tt=a(300),at=a(302),nt=Object(w.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%",display:"flex"}},"@media (max-device-width: 700px)":{root:{margin:e.spacing(1),display:"flex",width:"100%"}}}})),rt=function(e){e.children,e.value,e.index;var t=nt(),a=r.a.useState(""),n=Object(k.a)(a,2),i=n[0],o=n[1],l=r.a.useState(""),c=Object(k.a)(l,2),s=c[0],u=c[1],m=r.a.useState(""),d=Object(k.a)(m,2),p=d[0],h=d[1],f=r.a.useState(""),g=Object(k.a)(f,2),E=g[0],v=g[1],b=r.a.useState(""),y=Object(k.a)(b,2),C=y[0],S=y[1],O=r.a.useState(!1),_=Object(k.a)(O,2),w=_[0],x=_[1],j=r.a.useState(!1),I=Object(k.a)(j,2),A=I[0],D=I[1],G=r.a.useState(!1),R=Object(k.a)(G,2),F=R[0],P=R[1],T=r.a.useState(!1),L=Object(k.a)(T,2),M=L[0],U=L[1],W=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(C)},B=function(){return/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/g.test(s)},X=function(){return/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/g.test(E)},q=function(e){e.preventDefault(),i&&B()&&W()&&X()&&(A||M||F)||x(!0),function(e,t,a,n,r,i,o,l){K.post("/volunteers.json",{name:e,CNIC:t,location:a,ContactNumber:n,email:r,helpFood:i,helpRations:o,helpMoney:l})}(i,s,p,E,C,A,F,M)},H=function(e,t){t(e.target.value)};return r.a.createElement("form",{className:t.root,autoComplete:"on",style:{justifyContent:"center",display:"flex"}},r.a.createElement("div",null,w&&r.a.createElement(He,{title:"Validation Error",text:"Please enter correct details to continue",accept:function(){return x(!1)}}),r.a.createElement(Me.a,{id:"name",type:"name",label:"Name",value:i,onChange:function(e){return H(e,o)},required:!0,error:0===i.length}),r.a.createElement(Me.a,{id:"email",label:"Email",type:"email",value:C,onChange:function(e){return H(e,S)},required:!0,error:!W()}),r.a.createElement(Me.a,{id:"phone",label:"Contact",type:"phone",value:E,onChange:function(e){return H(e,v)},required:!0,error:!X()}),r.a.createElement(Me.a,{id:"location",label:"City",type:"location",value:p,onChange:function(e){return H(e,h)},required:!0,error:0===p.length}),r.a.createElement(Me.a,{id:"CNIC",label:"CNIC",type:"text",value:s,onChange:function(e){return H(e,u)},required:!0,error:!B(),helperText:"CNIC format: XXXXX-XXXXXXX-X"}),r.a.createElement("div",{style:{display:"grid"}},r.a.createElement(tt.a,{value:A,control:r.a.createElement(at.a,{color:"primary"}),label:"Provide Cooked Food",labelPlacement:"end",onChange:function(){return D(!A)}}),r.a.createElement(tt.a,{value:F,control:r.a.createElement(at.a,{color:"primary"}),label:"Provide Dry Rations",labelPlacement:"end",onChange:function(){return P(!F)}}),r.a.createElement(tt.a,{value:M,control:r.a.createElement(at.a,{color:"primary"}),label:"Provide Money",labelPlacement:"end",onChange:function(){return U(!M)}})),r.a.createElement(N.a,{type:"submit",variant:"contained",color:"primary",onClick:function(e){return q(e)},fullWidth:!0},"Submit")))},it=function(e){Object(O.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).action=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"primary",onClick:function(){return e.setState({show:!0})}},"Show"),r.a.createElement(N.a,{color:"primary",onClick:function(){e.props.closeSnackbar(t)}},"Dismiss"))},e.state={show:!1},e}return Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.enqueueSnackbar(r.a.createElement("div",{style:{cursor:"pointer"}},"Announcement"),{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:5e3,action:this.action}),this.props.setLoggingAction(),this.props.checkLogStatus()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),this.state.show?r.a.createElement(He,{title:"Message of the Day",text:"In this difficult time of COVID-19 , and self Quarantine  let's make the best use if it. Lets all contribute in any way that we can to help the less fortunate folks.\r While cooking food in your home , prepare an extra meal and let us know on our app for us to deliver the meals to the poor and needy . This small act of yours can bring a huge change in our society in these  challenging times...",buttonText:"Close",accept:function(){return e.setState({show:!1})}}):null,r.a.createElement(_.d,null,r.a.createElement(_.b,{path:"/",exact:!0,component:Te}),this.props.isAdmin?r.a.createElement(_.b,{path:"/volunteers",exact:!0,component:et}):this.props.loggedIn?null:r.a.createElement(_.b,{path:"/login",exact:!0,component:Ke}),r.a.createElement(_.b,{path:"/provide-a-service",exact:!0,component:rt}),r.a.createElement(_.a,{to:"/"})))}}]),a}(r.a.Component),ot=Object(c.b)((function(e){return{loggedIn:e.loggedIn,isAdmin:e.isAdmin}}),(function(e){return{checkLogStatus:function(){return e((function(e,t){h.auth().onAuthStateChanged((function(t){t?h.database().ref("users/".concat(t.uid)).on("value",(function(t){e({type:"LOGGED_IN",payload:!!t.val()&&t.val().isAdmin})})):e({type:"LOGGED_OUT"})}))}))},setLoggingAction:function(){return e((function(e,t){e({type:"LOGGING_ACTION"})}))}}}))(Object(b.withSnackbar)(it));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var lt=(new Date).getHours(),ct=lt>6&&lt<20,st=Object(g.a)({palette:{primary:{main:"#4285F4"},type:ct?"light":"dark"}});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:f},r.a.createElement(l.a,{basename:"/HelpPeopleSurviveCorona/"},r.a.createElement(E.a,{theme:st},r.a.createElement(b.SnackbarProvider,{maxSnack:3},r.a.createElement(v.a,null),r.a.createElement(ot,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports={main:"Main_main__rpHhe",cards:"Main_cards__b9GT_",imgLeft:"Main_imgLeft__3dwGJ","slide-in-left":"Main_slide-in-left__2CCIm"}}},[[171,1,2]]]);
//# sourceMappingURL=main.fad77611.chunk.js.map