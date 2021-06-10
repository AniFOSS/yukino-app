import{d as n,c as e,a as t,w as o,b as s,p as a,e as r,f as i,r as l,o as d,g as c,F as u,h as g,i as p,t as h,j as m,l as x,k as b,m as f,n as y,q as w,s as v,u as k,v as I,x as _,y as z,z as C,A as D,B as N,C as j,D as T,E as S,G as M,H as O,I as A,J as L,K as U,L as B,M as E,N as W}from"./vendor.e335890d.js";const G=()=>{const n=document.getElementById("download");n&&window.scrollTo({top:n.offsetTop-100,behavior:"smooth"})},H={urls:{baseUrl:"/yukino-app/",guides:"/yukino-app/guides/index.html",discord:"/yukino-app/discord.html"}};var P=n({data:()=>({guidesUrl:H.urls.guides,discordInvite:H.urls.discord,showNavItems:!1}),mounted(){document.addEventListener("scroll",(()=>{const n=document.getElementById("nav");document.body.scrollTop>600||document.documentElement.scrollTop>600?null==n||n.classList.add("active"):null==n||n.classList.remove("active")}))},methods:{openNavItems(){this.showNavItems=!this.showNavItems,console.log(this.showNavItems)},scrollToDownloads:G}});const Y=s();a("data-v-0d7702bc");const q={class:"fixed top-0 left-0 right-0 bg-white shadow-md z-50 md:block",id:"nav"},F={class:"\n                flex flex-col\n                md:flex-row\n                justify-around\n                items-center\n                gap-4\n                px-5\n                py-3\n            "},R={class:"\n                    flex flex-row\n                    justify-between\n                    items-center\n                    gap-2\n                    flex-wrap\n                    w-full\n                    md:w-auto\n                "},$=t("div",{class:"px-2 md:px-0"},[t("img",{class:"w-10",src:"/yukino-app/icon.png",alt:"Logo"})],-1),V=r(" Download "),J={class:"\n                        bg-black\n                        hover:bg-gray-800\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"https://github.com/zyrouge/yukino-app/",target:"_blank"},K={class:"mr-1"},Z=r(" GitHub"),Q={class:"mr-1"},X=r(" Guide"),nn={class:"\n                        bg-orange-600\n                        hover:bg-orange-700\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:"https://patreon.com/zyrouge",target:"_blank"},en={class:"mr-1"},tn=r(" Patreon"),on={class:"mr-1"},sn=r(" Discord");i();const an=Y(((n,s,a,r,i,c)=>{const u=l("Icon");return d(),e("div",q,[t("div",F,[t("div",R,[$,t("button",{class:"\n                        block\n                        md:hidden\n                        cursor-pointer\n                        focus:outline-none\n                        px-2\n                    ",onClick:s[1]||(s[1]=o((e=>n.openNavItems()),["prevent","stop"]))},[n.showNavItems?(d(),e(u,{key:0,icon:"times"})):(d(),e(u,{key:1,icon:"bars"}))])]),t("div",{class:[n.showNavItems?"flex":"hidden","flex-row","justify-center","items-center","gap-2","flex-wrap","md:flex"]},[t("button",{class:"\n                        focus:outline-none\n                        bg-indigo-500\n                        hover:bg-indigo-600\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",onClick:s[2]||(s[2]=o((e=>n.scrollToDownloads()),["prevent"]))},[t(u,{class:"mr-1",icon:"save"}),V]),t("a",J,[t("span",K,[t(u,{icon:["fab","github"]})]),Z]),t("a",{class:"\n                        bg-yellow-500\n                        hover:bg-yellow-600\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:n.guidesUrl,target:"_blank"},[t("span",Q,[t(u,{icon:"book-open"})]),X],8,["href"]),t("a",nn,[t("span",en,[t(u,{icon:["fab","patreon"]})]),tn]),t("a",{class:"\n                        bg-blue-700\n                        hover:bg-blue-800\n                        text-white\n                        px-4\n                        py-1.5\n                        rounded\n                        transition\n                        duration-200\n                    ",href:n.discordInvite,target:"_blank"},[t("span",on,[t(u,{icon:["fab","discord"]})]),sn],8,["href"])],2)])])}));P.render=an,P.__scopeId="data-v-0d7702bc";var rn=n({props:{images:{type:Array,required:!0},imgClassNames:{type:Array,required:!0}},data:()=>({currentIndex:0,currentImage:null}),mounted(){this.updateImage(),c((()=>this.currentIndex),(()=>this.updateImage()))},methods:{updateImage(){var n;this.currentImage=(null==(n=this.images)?void 0:n[this.currentIndex])||null},changeIndex(n){const e=this.currentIndex+n;this.currentIndex=this.images[e]?e:n>0?0:this.images.length-1}}});const ln={class:"flex flex-row justify-center items-center gap-6 relative"},dn={class:"mt-8 flex flex-row justify-center items-center flex-wrap gap-2"};rn.render=function(n,s,a,r,i,c){const p=l("Icon");return d(),e(u,null,[t("div",ln,[t("button",{class:"\n                focus:outline-none\n                text-3xl\n                md:text-5xl\n                opacity-50\n                hover:opacity-100\n                transition\n                duration-200\n                absolute\n                md:block\n                left-0\n                bg-gray-100 bg-opacity-75\n                md:bg-opacity-0\n                pl-2\n                pr-3\n                py-2\n                rounded-r\n            ",onClick:s[1]||(s[1]=o((e=>n.changeIndex(-1)),["prevent"]))},[t(p,{icon:"chevron-left"})]),(d(!0),e(u,null,g(n.images,((t,o)=>(d(),e("img",{class:["flex-none",o!==n.currentIndex&&"hidden",...n.imgClassNames],src:t,alt:`Image ${o+1}`},null,10,["src","alt"])))),256)),t("button",{class:"\n                focus:outline-none\n                text-3xl\n                md:text-5xl\n                opacity-50\n                hover:opacity-100\n                transition\n                duration-200\n                absolute\n                md:block\n                right-0\n                bg-gray-100 bg-opacity-75\n                md:bg-opacity-0\n                pl-3\n                pr-2\n                py-2\n                rounded-l\n            ",onClick:s[2]||(s[2]=o((e=>n.changeIndex(1)),["prevent"]))},[t(p,{icon:"chevron-right"})])]),t("div",dn,[(d(!0),e(u,null,g(Array(n.images.length),((t,o)=>(d(),e("button",{class:["focus:outline-none w-2 h-2 rounded-full",o===n.currentIndex?"bg-gray-800":"bg-gray-400"],onClick:e=>n.currentIndex=o},null,10,["onClick"])))),256))])],64)};var cn=n({name:"App",components:{NavBar:P,SlideShow:rn},data:()=>({screenshots:["https://github.com/zyrouge/yukino-app/raw/next/screenshots/home.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/search.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/anime.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/episodes.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/sources.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/player.png","https://github.com/zyrouge/yukino-app/raw/next/screenshots/manga.png"],features:[{icon:"compact-disc",headline:"Ad-free",text:"No more pop-ups! Watch anime with no ad interruption.",bgcolor:"bg-red-500",textcolor:"text-red-500"},{icon:"map-marker-alt",headline:"Source",text:"Scrapes data from multiple sites including 4Anime, GogoAnime, MangaFox, MangaDex, etc.",bgcolor:"bg-purple-500",textcolor:"text-purple-500"},{icon:"book-open",headline:"Manga",text:"Search up your favorite manga and start reading it right away!",bgcolor:"bg-green-500",textcolor:"text-green-500"},{icon:"heart",headline:"Open-sourced",text:"Source code available publicly, licensed under MIT.",bgcolor:"bg-pink-500",textcolor:"text-pink-500"},{icon:"stream",headline:"UI",text:"Simple, consistent and user-friendly interface!",bgcolor:"bg-yellow-500",textcolor:"text-yellow-500"},{icon:"moon",headline:"Theme",text:"Has Light and Dark mode to protect your eyes!",bgcolor:"bg-gray-900",textcolor:"text-gray-500"},{icon:["fab","discord"],headline:"Discord RPC",text:"Let your friends know what you are watching!",bgcolor:"bg-blue-700",textcolor:"text-blue-700"},{icon:"bolt",headline:"Cross Platform",text:"Available for Windows, MacOS, Linux and Android! Built on top of Vue, Electron and Capacitor.",bgcolor:"bg-blue-400",textcolor:"text-blue-400"}],releases:{web:"https://github.com/zyrouge/yukino-app/releases",all:"https://api.github.com/repos/zyrouge/yukino-app/releases"},downloads:[],guidesUrl:H.urls.guides,discordInvite:H.urls.discord,isOpenedIndex:0}),mounted(){this.getReleases()},methods:{async getReleases(){try{const n=await fetch(this.releases.all).then((n=>n.json()));n.filter((n=>!n.draft)).sort(((n,e)=>new Date(n.updated_at).getTime()-new Date(e.updated_at).getTime())).slice(0,5).forEach((n=>{const e=n.tag_name,t=n.assets.find((n=>n.browser_download_url.endsWith(".exe"))),o=n.assets.find((n=>n.browser_download_url.endsWith(".AppImage"))),s=n.assets.find((n=>n.browser_download_url.endsWith(".dmg"))),a=n.assets.find((n=>n.browser_download_url.endsWith(".apk")));if(e){const n={version:e,platforms:{}};t&&(n.platforms.windows={url:t.browser_download_url,size:t.size}),o&&(n.platforms.linux={url:o.browser_download_url,size:o.size}),s&&(n.platforms.mac={url:s.browser_download_url,size:s.size}),a&&(n.platforms.android={url:a.browser_download_url,size:a.size}),this.downloads.push(n)}}))}catch(n){console.error(n)}},setOpened(n){if(this.isOpenedIndex===n)return this.isOpenedIndex=null;this.isOpenedIndex=n},getMb:n=>(n/1e6).toFixed(2),getIcon(n){switch(n){case"windows":return["fab","windows"];case"linux":return["fab","linux"];case"mac":return["fab","apple"];case"android":return["fab","android"];default:return""}},scrollToDownloads:G}});const un={class:"font-sans text-white"},gn={class:"\n                    bg-gradient-to-b\n                    from-purple-500\n                    to-indigo-500\n                    text-center\n                    px-10\n                    md:px-20\n                    py-20\n                    md:py-40\n                "},pn=t("div",{class:"text-5xl md:text-7xl font-bold"},"Yukino",-1),hn=t("p",{class:"mt-8"}," Stream anime or read manga ad-free from multiple sources. ",-1),mn={class:"\n                        mt-8\n                        flex flex-row flex-wrap\n                        justify-center\n                        items-center\n                        gap-2\n                    "},xn={class:"mr-1"},bn=r(" Download "),fn={class:"\n                            bg-black\n                            hover:bg-gray-800\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:"https://github.com/zyrouge/yukino-app/",target:"_blank"},yn={class:"mr-1"},wn=r(" GitHub"),vn={class:"mr-1"},kn=r(" Guide"),In={class:"\n                            bg-orange-600\n                            hover:bg-orange-700\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:"https://patreon.com/zyrouge",target:"_blank"},_n={class:"mr-1"},zn=r(" Patreon"),Cn={class:"mr-1"},Dn=r(" Discord"),Nn={class:"text-gray-700 text-center mx-8 md:mx-20 my-16"},jn=t("p",{class:"text-lg"},[r(" The project's name "),t("strong",null,"Yukino"),r(" meaning "),t("strong",null,"Snow"),r(" named after the character "),t("strong",null,"Yukino Yukinoshita"),r(" from the anime "),t("strong",null,"Yahari Ore no Seishun Love Comedy wa Machigatteiru"),r(". ")],-1),Tn=t("p",{class:"mt-10 text-red-500 font-bold"}," We do not support piracy nor run/serve any illegal or copyrighted contents, everything is acquired from third-party sources. The developer of this application does not have any affiliation with any of the third-party sources. ",-1),Sn=t("hr",{class:"my-10"},null,-1),Mn=t("h1",{class:"text-2xl font-bold"},"Highlights",-1),On={class:"\n                        mt-4\n                        grid grid-cols-1\n                        md:grid-cols-2\n                        items-center\n                        gap-4\n                    "},An={class:"col-span-1"},Ln={class:"\n                                bg-gray-100\n                                rounded\n                                text-lg\n                                flex flex-col\n                                md:flex-row\n                                justify-center\n                                items-center\n                                gap-2\n                                md:gap-5\n                                px-5\n                                py-4\n                            "},Un={class:"\n                                    flex-grow\n                                    text-center\n                                    md:text-left\n                                    font-bold\n                                    md:leading-snug\n                                "},Bn=t("hr",{class:"my-10"},null,-1),En=t("h1",{class:"text-2xl font-bold"},"Preview",-1),Wn={class:"mt-4"},Gn=t("hr",{class:"my-10"},null,-1),Hn=t("h1",{class:"text-2xl font-bold",id:"download"},"Download",-1),Pn={class:"mt-4"},Yn={class:"mr-1.5 text-xs opacity-75"},qn={key:0,class:"\n                            flex flex-col\n                            lg:flex-row\n                            justify-center\n                            items-center\n                            gap-3\n                            mt-2\n                        "},Fn={class:"mr-1"},Rn=r(" Download for "),$n={class:"capitalize"},Vn={class:"text-xs opacity-75"},Jn={class:"mt-4"},Kn={class:"mt-1"},Zn=r(" Having trouble installing the app? Checkout our "),Qn=r(" page! "),Xn=p('<hr class="my-10"><div><h1 class="text-2xl font-bold">Contributing</h1><p class="mt-4"> Please read the <a class="\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        " href="https://github.com/zyrouge/yukino-app/#readme" target="_blank">readme</a> for information about contributing! </p></div><hr class="my-10">',3),ne=t("h1",{class:"text-2xl font-bold"},"Need help?",-1),ee={class:"mt-4"},te=r(" Use our "),oe=r(" or join our "),se=r(" for support! "),ae={class:"bg-indigo-500 text-center text-white px-10 py-10"},re=t("p",null,[t("strong",null,"Yukino"),r(" is licensed under "),t("strong",null,"MIT"),r(". ")],-1),ie={class:"mt-1"},le=r(" Made with "),de=r(" by "),ce=t("a",{class:"font-bold",href:"https://zyrouge.is-a.dev",target:"_blank"},"Zyrouge",-1),ue=r(". ");cn.render=function(n,s,a,i,c,p){const x=l("NavBar"),b=l("Icon"),f=l("SlideShow");return d(),e("main",null,[t(x),t("article",un,[t("div",gn,[pn,hn,t("div",mn,[t("button",{class:"\n                            focus:outline-none\n                            bg-white\n                            hover:bg-gray-200\n                            text-black\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",onClick:s[1]||(s[1]=o((e=>n.scrollToDownloads()),["prevent"]))},[t("span",xn,[t(b,{icon:"save"})]),bn]),t("a",fn,[t("span",yn,[t(b,{icon:["fab","github"]})]),wn]),t("a",{class:"\n                            bg-yellow-500\n                            hover:bg-yellow-600\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:n.guidesUrl,target:"_blank"},[t("span",vn,[t(b,{icon:"book-open"})]),kn],8,["href"]),t("a",In,[t("span",_n,[t(b,{icon:["fab","patreon"]})]),zn]),t("a",{class:"\n                            bg-blue-700\n                            hover:bg-blue-800\n                            px-5\n                            py-2\n                            rounded-lg\n                            shadow-lg\n                            transition\n                            duration-300\n                        ",href:n.discordInvite,target:"_blank"},[t("span",Cn,[t(b,{icon:["fab","discord"]})]),Dn],8,["href"])])])]),t("div",Nn,[jn,Tn,Sn,t("div",null,[Mn,t("div",On,[(d(!0),e(u,null,g(n.features,(n=>(d(),e("div",An,[t("div",Ln,[t("div",{class:`flex-none rounded text-white w-12 h-10 flex justify-center items-center ${n.bgcolor}`},[t(b,{icon:n.icon},null,8,["icon"])],2),t("div",Un,[t("p",{class:`text-xs ${n.textcolor}`},h(n.headline),3),t("p",null,h(n.text),1)])])])))),256))])]),Bn,t("div",null,[En,t("div",Wn,[t(f,{images:n.screenshots,imgClassNames:["rounded","w-full","md:w-5/6","shadow-md"]},null,8,["images"])])]),Gn,t("div",null,[Hn,(d(!0),e(u,null,g(n.downloads,((o,s)=>(d(),e("div",Pn,[t("p",{class:"font-bold cursor-pointer",onClick:e=>n.setOpened(s)},[t("span",Yn,[n.isOpenedIndex===s?(d(),e(b,{key:0,icon:"angle-double-down"})):(d(),e(b,{key:1,icon:"angle-double-right"}))]),r(h(o.version),1)],8,["onClick"]),n.isOpenedIndex===s?(d(),e("div",qn,[(d(!0),e(u,null,g(Object.entries(o.platforms),(([o,s])=>(d(),e("a",{class:"\n                                bg-indigo-500\n                                hover:bg-indigo-600\n                                text-white\n                                px-5\n                                py-2\n                                rounded-lg\n                                shadow-lg\n                                transition\n                                duration-300\n                            ",href:s.url,target:"_blank"},[t("p",null,[t("span",Fn,[t(b,{icon:n.getIcon(o)},null,8,["icon"])]),Rn,t("span",$n,h(o),1)]),t("p",Vn,h(n.getMb(s.size))+" MB ",1)],8,["href"])))),256))])):m("",!0)])))),256)),t("div",Jn,[t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.releases.web,target:"_blank"},"View all releases",8,["href"]),t("p",Kn,[Zn,t("a",{class:"\n                                text-indigo-500\n                                hover:text-indigo-600\n                                font-bold\n                                transition\n                                duration-300\n                            ",href:n.guidesUrl,target:"_blank"},"guides",8,["href"]),Qn])])]),Xn,t("div",null,[ne,t("p",ee,[te,t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.guidesUrl},"guides",8,["href"]),oe,t("a",{class:"\n                            text-indigo-500\n                            hover:text-indigo-600\n                            font-bold\n                            transition\n                            duration-300\n                        ",href:n.discordInvite,target:"_blank"},"discord ",8,["href"]),se])])]),t("div",ae,[re,t("p",ie,[le,t(b,{icon:"heart"}),de,ce,ue])])])};x.add(b,f,y,w,v,k,I,_,z,C,D,N,j,T,S,M,O,A,L,U,B),E(cn).component("Icon",W).mount("#app");
