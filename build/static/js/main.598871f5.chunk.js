(this["webpackJsonpwbdv-sp21-afo-client-react"]=this["webpackJsonpwbdv-sp21-afo-client-react"]||[]).push([[0],{29:function(e,c,t){},30:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(14),r=t.n(i),a=(t(27),t(28),t(29),t(6)),l=t(3),j=t(4),o=(t(30),t(0)),d=function(){var e=Object(n.useRef)(null),c=Object(n.useRef)(null),t=Object(n.useState)(!1),s=Object(j.a)(t,2),i=s[0],r=s[1],l=Object(n.useState)(!1),d=Object(j.a)(l,2),b=d[0],u=d[1];return Object(n.useEffect)((function(){var c=function(c){null===e.current||e.current.contains(c.target)||r(!1)};return i&&window.addEventListener("click",c),function(){window.removeEventListener("click",c)}}),[i]),Object(n.useEffect)((function(){var e=function(e){null===c.current||c.current.contains(e.target)||u(!1)};return b&&window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}),[b]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"row navbar fixed-top navbar-expanded-lg navbar-dark afo-navbar",children:[Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)("i",{className:"fa fa-bars btn afo-white navbar-btn",onClick:function(){return r(!i)},title:"main menu"})}),Object(o.jsx)("div",{className:"col-6 text-center",children:Object(o.jsx)(a.b,{to:"/home",style:{textDecoration:"none"},children:Object(o.jsx)("span",{className:"afo-white",children:Object(o.jsx)("strong",{children:"AFO"})})})}),Object(o.jsx)("div",{className:"col-3 text-right",children:Object(o.jsx)("i",{className:"fa fa-user-circle btn afo-white navbar-btn",onClick:function(){return u(!b)},title:"profile menu"})})]}),Object(o.jsxs)("div",{className:"row menu-container",children:[Object(o.jsx)("div",{className:"col-6 main-menu-container",children:Object(o.jsx)("nav",{ref:e,className:"menu main-menu ".concat(i?"active":"inactive"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/home",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/search",children:"Search"})})]})})}),Object(o.jsx)("div",{className:"col-6 profile-menu-container",children:Object(o.jsx)("nav",{ref:c,className:"menu profile-menu ".concat(b?"active":"inactive"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",children:"Profile"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",children:"Settings"})}),Object(o.jsx)("li",{children:Object(o.jsx)(a.b,{to:"/",children:"Log Out"})})]})})})]})]})},b=function(){return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12"})})},u=function(){return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col"})})},h=function(){return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"row top-row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h1",{className:"afo-purple afo-header",children:"AniFans Only"})})}),Object(o.jsx)(b,{}),Object(o.jsx)(u,{})]})})]})})})},m=t(11),x="https://api.jikan.moe/v3",O={findAllAnimeForUser:function(e){return fetch("".concat(x,"/user/").concat(e,"/animelist/all")).then((function(e){return e.json()}))},findWatchedAnimeForUser:function(e){return fetch("".concat(x,"/user/").concat(e,"/animelist/watching")).then((function(e){return e.json()}))},findCompletedAnimeForUser:function(e){return fetch("".concat(x,"/user/").concat(e,"/animelist/completed")).then((function(e){return e.json()}))},findAnimeByID:function(e){return fetch("".concat(x,"/anime/").concat(e)).then((function(e){return e.json()}))},findAnimeByTitle:function(e){return fetch("".concat(x,"/search/anime?q=").concat(e)).then((function(e){return e.json()}))},findAnimeByGenre:function(e){return fetch("".concat(x,"/search/anime?q=&genre=").concat(e)).then((function(e){return e.json()}))}},f={findImageByURL:function(e){return fetch("".concat("https://trace.moe/api/search","?url=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(e)})).catch((function(e){return console.log(e)}))}},v="FIND_ANIME_BY_TITLE",N="FIND_ANIME_BY_GENRE",p="FIND_ANIME_BY_ID",g={findAnimeByTitle:function(e,c){O.findAnimeByTitle(c).then((function(t){return e({type:v,results:t,searchKey:c})}))},findAnimeByGenre:function(e,c){O.findAnimeByGenre(c).then((function(c){return e({type:N,results:c,searchKey:"id"})}))},findAnimeByURL:function(e,c){f.findImageByURL(c).then((function(e){var c=e.docs[0].title_english;return O.findAnimeByTitle(c)})).then((function(c){return e({type:v,results:c,searchKey:"url"})})).catch((function(e){return console.log(e)}))},findAnimeById:function(e,c){O.findAnimeByID(c).then((function(c){return e({type:p,anime:c,searchKey:"id"})}))}},y=function(e){var c=Object(n.useState)(!0),t=Object(j.a)(c,2),s=t[0],i=t[1],r=Object(n.useState)(!1),a=Object(j.a)(r,2),l=a[0],d=a[1],b=Object(n.useState)(!1),u=Object(j.a)(b,2),h=u[0],m=u[1],x=Object(n.useState)("title"),O=Object(j.a)(x,2),f=O[0],v=O[1],N=function(e){"anime"===e?(i(!0),d(!1),m(!1)):"group"===e?(i(!1),d(!0),m(!1)):"user"===e&&(i(!1),d(!1),m(!0))};return Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 py-3",children:Object(o.jsxs)("div",{className:"search-box",children:[Object(o.jsxs)("div",{className:"row box-tab-row",children:[Object(o.jsx)("div",{className:"col-4 box-tab box-tab-12 ".concat(s?"active":"inactive"),onClick:function(){return N("anime")},id:"animeTab",children:Object(o.jsx)("h6",{className:"btn tab-text",onClick:function(){return N("anime")},children:"Anime"})}),Object(o.jsx)("div",{className:"col-4 box-tab box-tab-12 ".concat(l?"active":"inactive"),onClick:function(){return N("group")},id:"groupTab",children:Object(o.jsx)("h6",{className:"btn tab-text",onClick:function(){return N("group")},children:"Group"})}),Object(o.jsx)("div",{className:"col-4 box-tab ".concat(h?"active":"inactive"),onClick:function(){return N("user")},id:"userTab",children:Object(o.jsx)("h6",{className:"btn tab-text",onClick:function(){return N("user")},children:"User"})})]}),Object(o.jsxs)("div",{className:"row box-form-row",children:[s&&Object(o.jsxs)("div",{className:"col box-form",children:[Object(o.jsxs)("div",{className:"row pb-4 pt-1",children:[Object(o.jsx)("div",{className:"col-6 text-center py-2",children:Object(o.jsx)("button",{type:"button",className:"btn btn-secondary anime-form-btn",value:"searchTitleBtn",onClick:function(){return v("title")},children:"Search by Title"})}),Object(o.jsx)("div",{className:"col-6 text-center py-2",children:Object(o.jsx)("button",{type:"button",className:"btn btn-secondary anime-form-btn",value:"searchImageBtn",onClick:function(){return v("image")},children:"Search by Image"})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col input-form",children:["title"===f&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("label",{children:["Input the ",Object(o.jsx)("strong",{children:"anime title"})," below:"]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"animeTitleInput",value:e.searchTitle,className:"text-input-box",onChange:function(c){e.setSearchTitle(c.target.value)}})]})}),e.titleAlert&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"alert alert-warning mb-0 mt-2",role:"alert",children:"Need at least 3 characters for search"})}),Object(o.jsx)("div",{className:"row mt-5",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-block search-btn",value:"searchAnimeTitle",onClick:function(){e.searchClicked("title")},children:"Search"})})})]}),"image"===f&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("label",{children:["Input the ",Object(o.jsx)("strong",{children:"image URL"})," below:"]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"animeImageInput",value:e.searchURL,className:"text-input-box",onChange:function(c){e.setSearchURL(c.target.value)}})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-block search-btn mt-5",value:"searchAnimeURL",onClick:function(){e.searchClicked("url")},children:"Search"})})})]})]})})]}),l&&Object(o.jsx)("div",{className:"col box-form",children:Object(o.jsx)("div",{className:"row pt-5",children:Object(o.jsxs)("div",{className:"col input-form",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("label",{children:["Input the ",Object(o.jsx)("strong",{children:"group name"})," below:"]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"groupNameInput",className:"text-input-box"})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-block search-btn mt-5",value:"searchGroup",onClick:function(){e.searchClicked("group")},children:"Search"})})})]})})}),h&&Object(o.jsx)("div",{className:"col box-form",children:Object(o.jsx)("div",{className:"row pt-5",children:Object(o.jsxs)("div",{className:"col input-form",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("label",{children:["Input the ",Object(o.jsx)("strong",{children:"username"})," below:"]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",name:"userNameInput",className:"text-input-box"})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-block search-btn mt-5",value:"searchUser",onClick:function(){e.searchClicked("user")},children:"Search"})})})]})})})]})]})})})},w=function(e){return Object(o.jsx)("div",{className:"row anime-result-container my-5",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsxs)("div",{className:"row pt-3 result-header",children:[Object(o.jsx)("div",{className:"col-9",children:Object(o.jsx)("h4",{children:Object(o.jsx)(a.b,{className:"result-header-title",to:"/anime/".concat(e.anime.mal_id),children:e.anime.title})})}),Object(o.jsx)("div",{className:"col-3 text-right",children:Object(o.jsx)("p",{className:"afo-gray",children:e.anime.rated})})]}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-6 col-md-4",children:Object(o.jsx)("img",{src:e.anime.image_url,className:"result-img",alt:"Anime, ".concat(e.anime.title)})}),Object(o.jsx)("div",{className:"col-6 col-md-8",children:Object(o.jsxs)("p",{className:"afo-black",children:[e.anime.synopsis,Object(o.jsx)(a.b,{className:"result-read-more",to:"/anime/".concat(e.anime.mal_id),children:"(read more)"})]})})]})]})})},A=function(e){return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("div",{className:"row my-4",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsxs)("h4",{className:"afo-purple",children:[e.resultsList.length," Results","url"!==e.searchKey&&"id"!==e.searchKey&&Object(o.jsxs)(o.Fragment,{children:[' for "',e.searchKey,'"']})]}),Object(o.jsxs)("p",{className:"",children:["(Showing items ",10*e.currentPage-9," - ",10*e.currentPage-9+e.resultPages[e.currentPage-1].length-1,")"]})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:e.resultPages[e.currentPage-1].map((function(c,t){return Object(o.jsx)(w,{anime:c,findAnimeByID:e.findAnimeById},t)}))})})]})})},B=(t(41),Object(m.b)((function(e){return{resultsList:e.animeReducer.results,searchKey:e.animeReducer.searchKey}}),(function(e){return{findAnimeByTitle:function(c){return g.findAnimeByTitle(e,c)},findAnimeByGenre:function(c){return g.findAnimeByGenre(e,c)},findAnimeByURL:function(c){return g.findAnimeByURL(e,c)},findAnimeByID:function(c){return g.findAnimeById(e,c)}}}))((function(e){var c=Object(n.useState)("init"),t=Object(j.a)(c,2),s=t[0],i=t[1],r=Object(n.useState)(""),a=Object(j.a)(r,2),l=a[0],b=a[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),m=h[0],x=h[1],O=Object(n.useState)([]),f=Object(j.a)(O,2),v=f[0],N=f[1],p=Object(n.useState)(1),g=Object(j.a)(p,2),w=g[0],B=g[1],k=Object(n.useState)(0),I=Object(j.a)(k,2),L=I[0],S=I[1],C=Object(n.useState)(0),T=Object(j.a)(C,2),R=T[0],F=T[1],K=Object(n.useState)(0),U=Object(j.a)(K,2),E=U[0],_=U[1],D=Object(n.useState)(!1),P=Object(j.a)(D,2),G=P[0],M=P[1];Object(n.useEffect)((function(){Y()}),[e.resultsList]),Object(n.useEffect)((function(){q("first")}),[v]),Object(n.useEffect)((function(){M(!1)}),[s]);var Y=function(){var c=[];if(e.resultsList&&e.resultsList.results){var t=e.resultsList.results.length,n=t%10,s=Math.floor(t/10);0!==n&&(s+=1);for(var i=1;i<s+1;i++){var r,a=0,l=0;i===s&&0!==n?l=(a=10*i-10)+(n+1):a=(l=10*i)-10,r=e.resultsList.results.slice(a,l),c.push(r)}N(c)}},q=function(e){var c=w,t=L,n=R,s=E,i=v.length;"first"===e?(B(1),S(1),F(i>=2?2:0),_(i>=3?3:0)):"last"===e?(B(i),i>=3&&(_(i),F(i-1),S(i-2))):"left"===e?c>1&&(B(c-1),c-1===1?(S(1),F(2),_(i>=3?3:0)):c-2>=1&&(S(c-2),F(c-1),_(c))):"right"===e?c<i&&(B(c+1),c+1===i?2===i?(S(1),F(2),_(0)):i>2&&(_(c+1),F(c),S(c-1)):c+2<=i&&(S(c),F(c+1),_(c+2))):"pc1"===e?c!==t&&(B(t),t>=2&&(F(t),S(t-1),_(t+1))):"pc2"===e?c!==n&&B(n):"pc3"===e&&c!==s&&(B(s),s>=3&&(s===i?(_(i),F(i-1),S(i-2)):s<i&&(F(s),S(s-1),_(s+1))))};return Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"row top-row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("h1",{className:"afo-purple afo-header",children:"Search"})})}),Object(o.jsx)(y,{searchTitle:l,setSearchTitle:b,searchURL:m,setSearchURL:x,searchClicked:function(c){i(c),M(!1),"title"===c?l.length<3?M(!0):e.findAnimeByTitle(l):"url"===c&&e.findAnimeByURL(m)},titleAlert:G}),"init"!==s&&e.resultsList&&e.resultsList.results&&0===v.length&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"row my-4",children:Object(o.jsx)("div",{className:"col-12 text-center",children:Object(o.jsxs)("h4",{className:"afo-purple afo-header",children:["0 Results","url"!==e.searchKey&&"id"!==e.searchKey&&Object(o.jsxs)(o.Fragment,{children:[' for "',e.searchKey,'"']})]})})})}),"init"!==s&&e.resultsList&&e.resultsList.results&&v.length>=1&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(A,{searchKey:e.searchKey,resultsList:e.resultsList.results,resultPages:v,currentPage:w,findAnimeById:e.findAnimeByID}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("div",{className:"page-control",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3 text-right",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary pcFirstBtn",onClick:function(){return q("first")},children:"First"})}),Object(o.jsx)("div",{className:"col-1 text-right",children:Object(o.jsx)("i",{className:"fa fa-caret-left page-arrow fa-2x",onClick:function(){return q("left")}})}),Object(o.jsx)("div",{className:"col-4 text-center",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-4 text-center",children:Object(o.jsx)("span",{className:"btn pcNum ".concat(w===L?"active":"inactive"),onClick:function(){return q("pc1")},children:L})}),R>0&&Object(o.jsx)("div",{className:"col-4 text-center",children:Object(o.jsx)("span",{className:"btn pcNum ".concat(w===R?"active":"inactive"),onClick:function(){return q("pc2")},children:R})}),E>0&&Object(o.jsx)("div",{className:"col-4 text-center",children:Object(o.jsx)("span",{className:"btn pcNum ".concat(w===E?"active":"inactive"),onClick:function(){return q("pc3")},children:E})})]})}),Object(o.jsx)("div",{className:"col-1 text-left",children:Object(o.jsx)("i",{className:"fa fa-caret-right page-arrow fa-2x",onClick:function(){return q("right")}})}),Object(o.jsx)("div",{className:"col-3 text-left",children:Object(o.jsx)("button",{type:"button",className:"btn btn-outline-secondary pcLastBtn",onClick:function(){return q("last")},children:"Last"})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 pt-5 text-center",children:Object(o.jsxs)("p",{children:["(",v.length," pages total)"]})})})]})})})]})]})})]})})})}))),k=(t(42),Object(m.b)((function(e){return{currentAnime:e.animeReducer.anime}}),(function(e){return{findAnimeByTitle:function(c){return g.findAnimeByTitle(e,c)},findAnimeByGenre:function(c){return g.findAnimeByGenre(e,c)},findAnimeByURL:function(c){return g.findAnimeByURL(e,c)},findAnimeByID:function(c){return g.findAnimeById(e,c)}}}))((function(e){var c=e.currentAnime,t=e.findAnimeByID,s=Object(n.useState)("init"),i=Object(j.a)(s,2),r=i[0],a=i[1],b=Object(l.e)().animeId;return Object(n.useEffect)((function(){console.log(c),t(b),a("set")}),[r,b,t]),Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)(d,{}),c&&c.genres&&Object(o.jsx)("div",{className:"row top-row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 anime-info",children:[Object(o.jsxs)("div",{className:"row pb-4",children:[Object(o.jsx)("div",{className:"col-12 col-md-6",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 anime-header",children:[Object(o.jsx)("h3",{className:"afo-purple",children:c.title}),Object(o.jsx)("h6",{children:c.title_japanese})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("p",{className:"afo-gray float-right",children:c.rating})})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 pb-5",children:Object(o.jsx)("h6",{className:"afo-dark-purple",children:Object(o.jsxs)("strong",{children:[Object(o.jsx)("i",{className:"fa fa-star"})," ",c.score," / 10"]})})})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 pb-4",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Genre: "}),c.genres.map((function(e,t){return t+1===c.genres.length?Object(o.jsx)("span",{children:e.name},t):Object(o.jsxs)("span",{children:[e.name,", "]},t)}))]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Episodes:"})," ",c.episodes]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Aired:"})," ",c.aired.string]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("strong",{children:"Status:"})," ",c.status]}),c.trailer_url&&Object(o.jsx)("a",{className:"btn btn-secondary",href:c.trailer_url,target:"_blank",children:"View Trailer"})]})})]})})}),Object(o.jsx)("div",{className:"col-12 col-md-6 text-center",children:Object(o.jsx)("img",{src:c.image_url,className:"anime-img",alt:"Anime, ".concat(c.title)})})]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("p",{children:c.synopsis})})})]})})})})]})})})}))),I={results:[],user:{},searchKey:"",anime:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case v:case N:return{results:c.results,searchKey:c.searchKey};case p:return{anime:c.anime,searchKey:c.searchKey};default:return e}},S=t(13),C=(t(43),t(44),Object(S.b)({animeReducer:L})),T=Object(S.c)(C);var R=function(){return Object(o.jsx)(m.a,{store:T,children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(l.a,{path:["/","/home"],exact:!0,children:Object(o.jsx)(h,{})}),Object(o.jsx)(l.a,{path:["/search","/search/:title"],exact:!0,children:Object(o.jsx)(B,{})}),Object(o.jsx)(l.a,{path:["/anime/:animeId"],exact:!0,children:Object(o.jsx)(k,{})})]})})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,r=c.getTTFB;t(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),F()}},[[45,1,2]]]);
//# sourceMappingURL=main.598871f5.chunk.js.map