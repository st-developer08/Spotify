(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&t(m)}).observe(document,{childList:!0,subtree:!0});function a(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function t(o){if(o.ep)return;o.ep=!0;const f=a(o);fetch(o.href,f)}})();const Y=[{id:1,title:"ZXCURSED",artist:"Cursed",cover:"/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp",file:"/music/все песни shadowraze + zxcursed.m4a"},{id:2,title:"All want is you",artist:"Rebzyyx",cover:"/img/all want is you.webp",file:"/music/Rebzyyx - all i want is you _Official Audio_.mp3"},{id:3,title:"AURA SONGS",artist:"Phonk",cover:"/img/AURA SONGS.webp",file:"/music/MONTAGEM_BATCHI_Super_Slowed_+_Reverb_BRAZILIAN_PHONK_5BupLl_X.m4a"},{id:4,title:"Nuts",artist:"Lil Peep",cover:"/img/lil peep.webp",file:"/music/Lil_Peep_nuts_feat_rainy_bear_Official_Audio_osPq9Yb8xm8.m4a"},{id:5,title:"METAMORPHOSIS",artist:"metamorph",cover:"/img/metamorphosis 1 hour.jpg",file:"/music/INTERWORLD_METAMORPHOSIS-[317RHaFF7Xk].m4a"},{id:6,title:"ShO`nen",artist:"Rebzyyx",cover:"/img/shonen.jpg",file:"/music/廻廻奇譚 - Eve MV(Live Film ver).m4a"},{id:7,title:"JUDAS",artist:"Lady Gaga",cover:"/img/judas.jpg",file:"/music/JUDAS x GOJO vs SUKUNA _ EPIC BATTLE _ ANIME VOICES _Jujutsu Kai.mp3"},{id:8,title:"Starboy",artist:"The WEEKND",cover:"/img/weeknd.jpg",file:"/music/The_Weeknd_JENNIE_Lily_Rose_Depp_One_Of_The_Girls_Official_Vid.m4a"},{id:9,title:"Who am I?",artist:"WUTIWANT",cover:"/img/wutiwant.jpg",file:"/music/K1LLGRAIN, saraunh0ly - wutiwant (K1LLGRAIN REMIX).m4a"},{id:10,title:"Die with a Smile",artist:"Lady Gaga",cover:"/img/diewithasmile.webp",file:"/music/Lady_Gaga_Bruno_Mars_Die_With_A_Smile_Official_Music_Video_kP.m4a"},{id:11,title:"Heavy Love",artist:"Odetari",cover:"/img/odetari.webp",file:"/music/Odetari - Heavy Love (Official Audio).m4a"},{id:12,title:"One Dance",artist:"Drake",cover:"/img/one dance  Drake big.jpg",file:"/music/Drake - One Dance _Lyrics_ ft.Wizkid _ Kyla.mp3"},{id:13,title:"I Wanna Be Yours",artist:"Arctic Monkeys",cover:"/img/i wanna be your.jpg",file:"/music/Arctic_Monkeys_-_I_Wanna_Be_Yours-[fukGbiPuBjU].m4a"},{id:14,title:"Summertime Saddness",artist:"Lana Del Rey",cover:"/img/summertime.jpg",file:"/music/Lana_Del_Rey_-_Summertime_Sadness_Lyrics-[zQO7J483Dng].m4a"},{id:15,title:"Superhero",artist:"Metro Boomin",cover:"/img/superhero.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:16,title:"Levitating",artist:"Dua Lipa",cover:"/img/Levitating.jpg",file:"/music/Dua Lipa - Levitating (Lyrics).m4a"},{id:17,title:"Agudo Mágico 3",artist:"MC K.K",cover:"/img/agudo magico.jpg",file:"/music/Agudo_Mágico_3_MC_K_K_Dj_TG_Beats_Dj_Aurelio_MC_Lipivox_12.mp3"},{id:18,title:"Sweater Weather",artist:"The Neighbourhood",cover:"/img/swether.jpg",file:"/music/The Neighbourhood - Sweater Weather _Lyrics_.mp3"},{id:19,title:"Starboy",artist:"The Weeknd",cover:"/img/starboy.jpg",file:"/music/The Weeknd - Starboy (Lyrics) ft. Daft Punk.m4a"},{id:20,title:"Blinding Lights",artist:"The Weeknd",cover:"/img/Blinding Lights.jpg",file:"/music/The_Weeknd_-_Blinding_Lights_Official_Video-[4NRXx6U8ABQ].m4a"},{id:21,title:"Bad guy",artist:"Billie Eilish",cover:"/img/bad guy.jpg",file:"/music/Bad guy   Billie Eilish.mp3"},{id:22,title:"Shape of You",artist:"Ed Sheeran",cover:"/img/Ed Sheran.webp",file:"/music/Shapeof you (Produse 101 Major Lazer remix)   Ed Sheeran.mp3"},{id:23,title:"Poker Face",artist:"Lady Gaga",cover:"/img/pokerface.jpg",file:"/music/Pokerface (Originally Performed By Lady Gaga) [Karaoke Versi.mp3"},{id:24,title:"Rolling in the Deep",artist:"Adele",cover:"/img/rolling.jpg",file:"/music/01 - Adele - Rolling In The Deep.mp3"},{id:25,title:"Believer",artist:"Imagine Dragons",cover:"/img/believer.jpg",file:"/music/Believer.mp3"}],Q=[{id:1,title:"Phonk Instinct",artist:"PHONK",cover:"/img/Phonk instinct - big.jpg",file:"/music/MONTAGEM_BATCHI_Super_Slowed_+_Reverb_BRAZILIAN_PHONK_5BupLl_X.m4a"},{id:2,title:"GYMCORE",artist:"gym",cover:"/img/gymcore -big.jpg",file:"/music/gymcore, Shyron   HÄRKÄ - IMMORTAL FUNK [Brazilian Phonk].m4a"},{id:3,title:"One Dance",artist:"Drake",cover:"/img/one dance  Drake big.jpg",file:"/music/Drake - One Dance _Lyrics_ ft.Wizkid _ Kyla.mp3"},{id:4,title:"I Wanna Be Yours",artist:"Arctic Monkeys",cover:"/img/i wanna be your.jpg",file:"/music/Arctic_Monkeys_-_I_Wanna_Be_Yours-[fukGbiPuBjU].m4a"},{id:5,title:"Summertime Saddness",artist:"Lana Del Rey",cover:"/img/summertime.jpg",file:"/music/Lana_Del_Rey_-_Summertime_Sadness_Lyrics-[zQO7J483Dng].m4a"},{id:6,title:"Superhero",artist:"Metro Boomin",cover:"/img/superhero.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:7,title:"Superman",artist:"Eminem",cover:"/img/eminem-superman.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:8,title:"ShO`nen",artist:"Rebzyyx",cover:"/img/shonen.jpg",file:"/music/廻廻奇譚 - Eve MV(Live Film ver).m4a"},{id:9,title:"Mockingbird",artist:"Eminem",cover:"/img/mockinbird.jpg",file:"/music/Eminem_-_Mockingbird_Lyrics-[37V3b39_EXw].m4a"},{id:10,title:"Heavy Love",artist:"Odetari",cover:"/img/odetari.webp",file:"/music/Odetari - Heavy Love (Official Audio).m4a"}],Z=[{id:11,title:"Blinding Lights",artist:"The Weeknd",cover:"/img/Blinding Lights.jpg",file:"/music/The_Weeknd_-_Blinding_Lights_Official_Video-[4NRXx6U8ABQ].m4a"},{id:12,title:"Levitating",artist:"Dua Lipa",cover:"/img/Levitating.jpg",file:"/music/Dua Lipa - Levitating (Lyrics).m4a"},{id:13,title:"Starboy",artist:"The Weeknd",cover:"/img/starboy.jpg",file:"/music/The Weeknd - Starboy (Lyrics) ft. Daft Punk.m4a"},{id:14,title:"Sweater Weather",artist:"The Neighbourhood",cover:"/img/swether.jpg",file:"/music/The Neighbourhood - Sweater Weather _Lyrics_.mp3"},{id:15,title:"Agudo Mágico 3",artist:"MC K.K",cover:"/img/agudo magico.jpg",file:"/music/Agudo_Mágico_3_MC_K_K_Dj_TG_Beats_Dj_Aurelio_MC_Lipivox_12.mp3"}],ee=[{id:16,title:"Shape of You",artist:"Ed Sheeran",cover:"/img/Ed Sheran.webp",file:"/music/Shapeof you (Produse 101 Major Lazer remix)   Ed Sheeran.mp3"},{id:17,title:"Bad guy",artist:"Billie Eilish",cover:"/img/bad guy.jpg",file:"/music/Bad guy   Billie Eilish.mp3"},{id:18,title:"Poker Face",artist:"Lady Gaga",cover:"/img/pokerface.jpg",file:"/music/Pokerface (Originally Performed By Lady Gaga) [Karaoke Versi.mp3"},{id:19,title:"Rolling in the Deep",artist:"Adele",cover:"/img/rolling.jpg",file:"/music/01 - Adele - Rolling In The Deep.mp3"},{id:20,title:"Believer",artist:"Imagine Dragons",cover:"/img/believer.jpg",file:"/music/Believer.mp3"}],M={sidebarTracks:Y,mainTracks:Q,topTracks:Z,listenToday:ee};function te(r){r.innerHTML=`
  <div class="songs-preloader relative h-full overflow-y-auto rounded-xl bg-black/80 shadow-xl p-8">
    <div class="flex flex-col md:flex-row items-start md:items-end gap-8">
      <div class="bg-neutral-800 rounded-2xl w-[200px] h-[200px] md:w-[280px] md:h-[280px]"></div>
      <div class="flex-1 space-y-4">
        <div class="bg-neutral-800 h-5 w-44 rounded"></div>
        <div class="bg-neutral-700 h-12 w-80 rounded"></div>
        <div class="flex gap-3">
          <div class="bg-neutral-800 h-5 w-28 rounded"></div>
          <div class="bg-neutral-800 h-5 w-20 rounded"></div>
        </div>
        <div class="flex gap-4 mt-4">
          <div class="bg-neutral-700 h-12 w-28 rounded-xl"></div>
          <div class="bg-neutral-800 h-12 w-12 rounded-md"></div>
        </div>
      </div>
    </div>

    <div class="mt-10 space-y-5">
      ${Array(8).fill("").map(()=>`
        <div class="grid grid-cols-[70px_minmax(0,2fr)_1fr_1fr_70px] gap-6 items-center">
          <div class="bg-neutral-800 h-5 w-10 rounded"></div>
          <div class="bg-neutral-800 h-5 w-48 rounded"></div>
          <div class="bg-neutral-800 h-5 w-40 rounded hidden md:block"></div>
          <div class="bg-neutral-800 h-5 w-32 rounded hidden md:block"></div>
          <div class="bg-neutral-800 h-5 w-12 rounded"></div>
        </div>
      `).join("")}
    </div>
  </div>
  `}function P(r,l={}){const a=document.querySelector("#main-content")||document.querySelector("#playlists")||document.querySelector("main")||document.body;a&&(te(a),setTimeout(()=>{const t=Array.isArray(l.playlist)?l.playlist.slice():M.sidebarTracks.slice();let o=typeof l.index=="number"?l.index:t.findIndex(n=>String(n.id)===String(r));o<0&&(o=0);const f=t[o]||t[0]||{cover:"/img/default.jpg",title:"Unknown",artist:""},m=t.map((n,e)=>{const d=n.cover||"/img/song-cover.png";return`
      <tr
        class="song-row ${e===o?"bg-gradient-to-r from-[#1DB954]/20 to-transparent":"hover:bg-white/5"}
               transition-all duration-200 cursor-pointer group rounded-md"
        data-index="${e}" data-id="${n.id}"
      >
        <td class="py-3 px-4 text-neutral-400 w-[48px] md:w-[60px] font-medium text-sm text-center">
          <span class="group-hover:hidden block">${e+1}</span>
          <img src="/svg/white-play-table.svg" alt="" 
               class="hidden group-hover:inline w-5 h-5 mx-auto" />
        </td>

        <td class="py-3 px-4 flex items-center gap-3 md:gap-4 min-w-[180px] md:min-w-[280px]">
          <div class="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img src="${$(d)}" alt="${$(n.title)}"
                 class="row-cover w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover shadow-md transition-transform duration-200 group-hover:scale-105" />
            <div class="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
          </div>
          <div class="min-w-0">
            <p class="text-white font-semibold truncate max-w-[360px] group-hover:text-[#ffffff] transition-colors">${$(n.title)}</p>
            <p class="text-neutral-400 text-xs truncate group-hover:text-white">${$(n.artist)}</p>
          </div>
        </td>

        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell truncate max-w-[220px]">${$(n.album||"")}</td>
        <td class="py-3 px-4 text-neutral-400 hidden md:table-cell">${$(n.added||"")}</td>

        <td class="py-3 px-3 w-[56px] text-right">
          <button class="add-btn opacity-0 group-hover:opacity-100 transition inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/8">
          </button>
        </td>
      </tr>
      `}).join("");a.innerHTML=`
<div class="songs-page relative h-full overflow-y-auto rounded-xl bg-black/80 shadow-xl">
  <div class="absolute inset-0 -z-10 overflow-hidden rounded-xl">
    <img src="${$(f.cover)}"
         class="w-full h-full object-cover scale-100 blur-2xl opacity-70 saturate-1500"
         alt="bg" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black"></div>
  </div>

  <section class="flex flex-col md:flex-row items-start md:items-end gap-6 px-4 md:px-[40px] pt-8 md:pt-16 relative z-10">
    <div class="relative flex-shrink-0">
      <img class="object-cover w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-[1.03]"
           src="${$(f.cover)}" alt="playlist cover" />
      <div class="absolute bottom-[6px] left-3 px-3 py-1 rounded-full text-xs bg-black/40 border border-white/5 text-neutral-300">
        ${t.length} songs
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <p class="text-neutral-300 text-sm font-semibold uppercase tracking-wide">Public Playlist</p>
      <h1 class="text-white font-extrabold text-2xl md:text-[48px] leading-tight tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">${$(f.title)}</h1>
      <div class="flex items-center gap-3 text-neutral-300">
        <span class="text-neutral-300">${$(f.artist)}</span>
        <div class="h-1 w-1 rounded-full bg-neutral-600"></div>
        <span class="text-neutral-400">${Math.max(0,t.length)} tracks</span>
      </div>

      <div class="mt-3 flex items-center gap-3">
        <button id="play-all" class="flex items-center gap-3 px-4 md:px-5 py-2 md:py-3 bg-white hover:bg-[#17a84a] text-black font-semibold rounded-xl transition-transform transform hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3v18l15-9z"/>
          </svg>
          Play
        </button>

        <button id="like-playlist" class="p-2 md:p-3 rounded-md bg-white/5 hover:bg-white/8 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 md:w-5 h-4 md:h-5 text-neutral-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          </svg>
        </button>

        <div class="text-neutral-400 text-sm ml-2 md:ml-4">Created by <span class="text-white font-semibold">You</span></div>
      </div>
    </div>
  </section>

  <div class="mt-6 md:mt-7 px-4 md:px-[20px] pb-24 relative z-10">
    <div class="rounded-2xl shadow-2xl overflow-hidden">
      <div class="grid grid-cols-[48px_minmax(0,1fr)_1fr_1fr_56px] items-center py-3 px-4 text-xs uppercase text-neutral-400 tracking-wider border-b border-neutral-800">
        <div class="text-center">#</div>
        <div>Title</div>
        <div class="hidden md:block">Album</div>
        <div class="hidden md:block">Date added</div>
        <div></div>
      </div>

      <div class="pb-9">
        <table class="w-full text-left">
          <tbody class="text-sm text-white divide-y divide-neutral-800">
            ${m}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`;const u=a.querySelector("#play-all");u&&u.addEventListener("click",()=>{typeof window.setPlaylist=="function"?window.setPlaylist(t,!0):console.warn("setPlaylist not found")});const c=Array.from(a.querySelectorAll(".song-row"));(function(e){e.forEach(d=>{if(d.dataset.color)return;const p=d.querySelector(".row-cover");p&&R(p).then(S=>S||G(p.src)).then(S=>{S&&(d.dataset.color=JSON.stringify(S))}).catch(()=>{})})})(c),c.forEach(n=>{n.addEventListener("click",async()=>{const e=Number(n.dataset.index);typeof window.setPlaylist=="function"&&window.setPlaylist(t,!1),typeof window.playTrack=="function"&&window.playTrack(e),await s(e)})});async function s(n){a.querySelectorAll(".song-row").forEach(T=>{T.classList.remove("bg-gradient-to-r","from-[#1DB954]/20","to-transparent"),T.style.backgroundImage="",T.style.boxShadow=""});const d=a.querySelector(`.song-row[data-index="${n}"]`);if(!d)return;d.classList.add("bg-gradient-to-r","from-[#1DB954]/20","to-transparent");let p=null;if(d.dataset.color)try{p=JSON.parse(d.dataset.color)}catch{p=null}const S=d.querySelector(".row-cover");p||(p=await R(S).catch(()=>null),p||(p=await G(S?.src).catch(()=>null)),p||(p={r:29,g:185,b:84,hex:"#1DB954"}),d.dataset.color=JSON.stringify(p)),J(d,p),X(a,p);const b=t[n];if(b){const T=a.querySelector("section img.object-cover"),k=a.querySelector("section h1, section h2"),_=a.querySelector("section .text-neutral-300");T&&(T.src=b.cover||"/img/default.jpg"),k&&(k.textContent=b.title||""),_&&(_.textContent=`${b.artist||""} • ${t.length} songs`);const v=re(p);k&&(k.style.color=v==="#fff")}window.__currentSongsView=window.__currentSongsView||{},window.__currentSongsView.selectedIndex=n,window.__currentSongsView.playlistIds=t.map(T=>String(T.id))}l.autoplay&&(typeof window.setPlaylist=="function"&&window.setPlaylist(t,!1),typeof window.playTrack=="function"&&window.playTrack(o)),s(o),window.__applySongColor=async function(n,e,d){if(!e||!n)return;let p=null;if(e.dataset.color)try{p=JSON.parse(e.dataset.color)}catch{p=null}if(!p){const S=e.querySelector(".row-cover");p=await R(S).catch(()=>null),p||(p=await G(d).catch(()=>null)),p||(p={r:29,g:185,b:84,hex:"#1DB954"}),e.dataset.color=JSON.stringify(p)}J(e,p),X(n,p)},window.__currentSongsView={playlistIds:t.map(n=>String(n.id)),selectedIndex:o}},450))}document.addEventListener("player:trackChange",r=>{try{const{playlist:l,index:a,track:t}=r.detail||{};if(!l||l.length===0)return;const o=l.map(m=>String(m.id)),f=window.__currentSongsView;if(f&&ie(f.playlistIds,o)){const m=document.querySelector("#main-content")||document.querySelector("#playlists")||document.querySelector("main")||document.body,u=Number(a||0),c=m.querySelector(`.song-row[data-index="${u}"]`);if(c){m.querySelectorAll(".song-row").forEach(d=>d.classList.remove("bg-gradient-to-r","from-[#1DB954]/20","to-transparent")),c.classList.add("bg-gradient-to-r","from-[#1DB954]/20","to-transparent");const s=m.querySelector("section img.object-cover"),n=m.querySelector("section h1, section h2"),e=m.querySelector("section .text-neutral-300");s&&t&&(s.src=t.cover||"/img/default.jpg"),n&&t&&(n.textContent=t.title||""),e&&t&&(e.textContent=`${t.artist||""} • ${o.length} songs`),window.__currentSongsView.selectedIndex=u,typeof window.__applySongColor=="function"&&window.__applySongColor(m,c,t?.cover)}return}if(typeof P=="function"){const m=t&&t.id?t.id:l[0]?.id;P(m,{playlist:l,index:a,autoplay:!1})}}catch(l){console.error("player:trackChange handler error:",l)}});function ie(r,l){if(!r||!l||r.length!==l.length)return!1;for(let a=0;a<r.length;a++)if(String(r[a])!==String(l[a]))return!1;return!0}function $(r){return r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function F([r,l,a]){const t=o=>o.toString(16).padStart(2,"0");return`#${t(r)}${t(l)}${t(a)}`}function re({r,g:l,b:a}){return(r*299+l*587+a*114)/1e3>=128?"#000":"#fff"}function R(r){return new Promise(l=>{if(!r)return l(null);function a(){try{const t=document.createElement("canvas"),o=t.getContext("2d"),f=40,m=Math.round(r.naturalHeight/r.naturalWidth*f)||40;t.width=f,t.height=m,o.drawImage(r,0,0,f,m);const u=o.getImageData(0,0,f,m).data,c={};let s=0;for(let b=0;b<u.length;b+=4){if(u[b+3]<125)continue;let k=u[b],_=u[b+1],v=u[b+2];if(k>240&&_>240&&v>240||k<10&&_<10&&v<10)continue;const x=k>>4,w=_>>4,L=v>>4,B=x<<8|w<<4|L;c[B]||(c[B]={count:0,rSum:0,gSum:0,bSum:0}),c[B].count++,c[B].rSum+=k,c[B].gSum+=_,c[B].bSum+=v,s++}let n=null;for(const b in c)(!n||c[b].count>c[n].count)&&(n=b);if(!n){let b=0,T=0,k=0,_=0;for(let L=0;L<u.length;L+=4)u[L+3]<125||(b+=u[L],T+=u[L+1],k+=u[L+2],_++);if(_===0)return l(null);const v=Math.round(b/_),x=Math.round(T/_),w=Math.round(k/_);return l({r:v,g:x,b:w,hex:F([v,x,w])})}const e=c[n],d=Math.round(e.rSum/e.count),p=Math.round(e.gSum/e.count),S=Math.round(e.bSum/e.count);l({r:d,g:p,b:S,hex:F([d,p,S])})}catch{l(null)}}if(r.complete&&r.naturalWidth)a();else{const t=()=>{r.removeEventListener("load",t),r.removeEventListener("error",o),a()},o=()=>{r.removeEventListener("load",t),r.removeEventListener("error",o),l(null)};r.addEventListener("load",t),r.addEventListener("error",o)}})}function G(r){return new Promise(l=>{if(!r)return l(null);const a=new Image;a.crossOrigin="Anonymous",a.src=r,a.onload=async()=>{const t=await R(a);l(t)},a.onerror=()=>l(null)})}function J(r,l){if(!r)return;l||(l={r:29,g:185,b:84,hex:"#1DB954"});const{r:a,g:t,b:o}=l;r.style.backgroundImage=`linear-gradient(90deg, rgba(${a},${t},${o},0.18) 0%, rgba(${a},${t},${o},0.06) 40%, transparent 100%)`,r.style.boxShadow=`inset 6px 0 18px rgba(${a},${t},${o},0.07)`}function X(r,l){if(!r)return;l||(l={r:29,g:185,b:84});const{r:a,g:t,b:o}=l,f=r.querySelector(".songs-page .absolute.inset-0");if(!f)return;const m=f.querySelector("div");m&&(m.style.background=`linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(${a},${t},${o},0.10) 30%, rgba(0,0,0,0.95) 100%)`,m.style.transition="background 300ms ease")}function ae(){const r=document.querySelector("#sidebar");if(!r)return;r.className="hidden md:flex flex-col gap-2 w-full h-[95%] overflow-hidden",r.innerHTML=`
    <div class="bg-transparent bg-animated-dark  rounded-xl flex flex-col flex-1 min-h-0 overflow-hidden h-full">
      <div class="flex items-center justify-between px-4 pt-4 pb-2 flex-shrink-0">
        <div class="flex items-center gap-3 text-sm font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer">
          <img src="/svg/library.svg" class="w-5 h-5" alt="library" />
          <p class="text-lg font-bold text-white">My Library</p>
        </div>
      </div>
      <div class="flex-1 min-h-0 px-2 pb-4" data-simplebar>
        <ul id="sidebar-tracks" class="flex flex-col gap-1"></ul>
      </div>
    </div>
  `;const l=document.getElementById("mobile-sidebar-placeholder");l&&(l.innerHTML='<ul id="mobile-sidebar-tracks" class="flex flex-col gap-2"></ul>');const a=r.querySelector("#sidebar-tracks"),t=document.querySelector("#mobile-sidebar-tracks");function o(){a.querySelectorAll(".playlist-item").forEach(u=>{u.classList.remove("bg-gradient-to-r","from-[#1db95433]","to-transparent");const c=u.querySelector("img"),s=u.querySelector(".playlist-title"),n=u.querySelector(".playlist-artist"),e=u.querySelector(".active-icon");c&&c.classList.remove("ring-2","ring-[#1DB954]"),s&&(s.classList.remove("text-[#1DB954]"),s.classList.add("text-white")),n&&n.classList.remove("text-gray-300"),e&&e.classList.add("hidden")}),t&&t.querySelectorAll(".playlist-item").forEach(u=>{u.classList.remove("bg-gradient-to-r","from-[#1db95433]","to-transparent","opacity-100")})}M.sidebarTracks.forEach((u,c)=>{const s=document.createElement("li");s.className="playlist-item group relative flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors",s.dataset.index=String(c),s.innerHTML=`
      <img src="${u.cover}" alt="${u.title}" class="w-12 h-12 rounded transition-all object-cover" />
      <div class="flex flex-col flex-1 min-w-0">
        <div class="flex items-center gap-2">
          <svg class="active-icon w-4 h-4 text-[#1DB954] hidden flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          <span class="playlist-title text-white font-medium truncate">${u.title}</span>
        </div>
        <span class="playlist-artist text-gray-400 text-sm truncate">${u.artist}</span>
      </div>
    `;const n=s.cloneNode(!0),e=()=>{if(P(u.id,{playlist:M.sidebarTracks,index:c,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.sidebarTracks,!1),typeof window.playTrack=="function"&&window.playTrack(c),o(),s.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),s.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),s.querySelector(".playlist-title").classList.remove("text-white"),s.querySelector(".playlist-title").classList.add("text-[#1DB954]"),s.querySelector(".playlist-artist").classList.add("text-gray-300"),s.querySelector(".active-icon").classList.remove("hidden"),n){n.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent");const p=n.querySelector("img");p&&p.classList.add("ring-2","ring-[#1DB954]");const S=n.querySelector(".playlist-title");S&&(S.classList.remove("text-white"),S.classList.add("text-[#1DB954]"))}const d=document.getElementById("offcanvas-sidebar");d&&window.innerWidth<768&&d.classList.add("translate-x-[-100%]","opacity-0")};s.addEventListener("click",e),s.addEventListener("touchstart",()=>s.classList.add("active")),s.addEventListener("touchend",()=>s.classList.remove("active")),a.appendChild(s),t&&(n.addEventListener("click",e),t.appendChild(n))});const f=M.sidebarTracks.map(u=>String(u.id));document.addEventListener("player:trackChange",u=>{try{const{playlist:c,index:s}=u.detail||{};if(!c||!Array.isArray(c)){o();return}const n=c.map(e=>String(e.id));if(m(n,f)){const e=Number(s);if(!Number.isNaN(e)&&e>=0&&e<a.children.length)if(typeof window.__setSidebarActive=="function")window.__setSidebarActive(e);else{o();const d=a.querySelectorAll(".playlist-item")[e];d&&(d.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),d.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),d.querySelector(".playlist-title").classList.remove("text-white"),d.querySelector(".playlist-title").classList.add("text-[#1DB954]"),d.querySelector(".playlist-artist").classList.add("text-gray-300"),d.querySelector(".active-icon").classList.remove("hidden"),d.scrollIntoView({behavior:"smooth",block:"nearest"}))}else o()}else o()}catch(c){alert.warn("sidebar sync error:",c)}}),window.__setSidebarActive=function(u){o();const c=a.querySelectorAll(".playlist-item")[Number(u)];if(c){c.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),c.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),c.querySelector(".playlist-title").classList.remove("text-white"),c.querySelector(".playlist-title").classList.add("text-[#1DB954]"),c.querySelector(".playlist-artist").classList.add("text-gray-300");const s=c.querySelector(".active-icon");s&&s.classList.remove("hidden"),c.scrollIntoView({behavior:"smooth",block:"nearest"})}},window.__clearSidebarActive=function(){o()};function m(u,c){if(!Array.isArray(u)||!Array.isArray(c)||u.length!==c.length)return!1;for(let s=0;s<u.length;s++)if(String(u[s])!==String(c[s]))return!1;return!0}}function se(r){let l=!1,a,t;r.addEventListener("mousedown",o=>{l=!0,a=o.pageX-r.offsetLeft,t=r.scrollLeft}),r.addEventListener("mouseleave",()=>{l=!1,r.style.background="none",r.style.opacity="1"}),r.addEventListener("mouseup",()=>{l=!1,r.style.background="none",r.style.opacity="1"}),r.addEventListener("mousemove",o=>{if(!l)return;o.preventDefault();const m=o.pageX-r.offsetLeft-a;r.scrollLeft=t-m*1})}function U(r=[]){const l=document.querySelector(".player");l&&l.remove();const a=document.createElement("div");a.className="player z-50 fixed bottom-0 left-0 w-full md:left-1/2 md:-translate-x-1/2 md:w-[100%] bg-black/95 backdrop-blur-3xl rounded-t-xl md:rounded-1xl shadow-[0_8px_25px_rgba(0,0,0,0.7)] transition-all duration-300",a.innerHTML=`
    <audio id="audio" preload="metadata"></audio>

    <div class="max-w-[1600px] mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center gap-3">
      <!-- Left: cover + title (mobile condensed) -->
      <div class="flex items-center gap-3 min-w-0 md:w-[300px]">
        <img id="player-cover" src="/img/default.jpg"
             class="w-12 h-12 md:w-20 md:h-20 rounded-2xl object-cover transition-transform duration-300"
             alt="cover" />
        <div class="flex flex-col min-w-0">
          <span id="player-title" class="text-white font-semibold text-sm md:text-lg truncate max-w-[220px]">Song Name</span>
          <span id="player-artist" class="text-gray-400 text-xs md:text-sm truncate max-w-[220px]">Artist Name</span>
        </div>
      </div>

      <div class="flex-1 flex flex-col items-center md:items-center gap-2">
        <div class="flex items-center gap-4 md:gap-7 text-white">
          <button id="random-btn" class="rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center transition-colors active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 md:w-5 md:h-5">
              <path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"/>
              <path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"/>
            </svg>
          </button>

          <button id="prev" class="rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 hover:text-[#1DB954] active:scale-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
              <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7z"/>
            </svg>
          </button>

          <button id="play-btn" class="rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white text-black shadow-lg hover:scale-105 active:scale-95 transition">
            <svg id="play-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>

          <button id="next" class="rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-gray-300 hover:text-[#1DB954] active:scale-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-5 h-5 md:w-6 md:h-6">
              <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"/>
            </svg>
          </button>

          <button id="repeat-btn" class="hidden md:inline-flex rounded-full w-8 h-8 items-center justify-center active:scale-95 transition">
            <svg id="repeat-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M17 1l4 4-4 4V6H7a3 3 0 0 0-3 3v2H2V9a5 5 0 0 1 5-5h10V1zM7 23l-4-4 4-4v3h10a3 3 0 0 0 3-3v-2h2v2a5 5 0 0 1-5 5H7v3z"/>
            </svg>
          </button>
        </div>

        <div class="flex items-center gap-3 w-full mt-1 md:mt-0">
          <span id="current-time" class="text-gray-400 text-xs hidden md:inline">0:00</span>
          <input id="progress-bar" type="range" min="0" max="100" value="0"
            class="w-full h-1 rounded-full cursor-pointer accent-[#ffffff] shadow-inner" />
          <span id="total-time" class="text-gray-400 text-xs hidden md:inline">0:00</span>
        </div>
      </div>

      <!-- Right: volume & extra (hide on small screens) -->
      <div class="hidden md:flex items-center gap-4 md:w-[170px] justify-end">
        <svg id="volume-icon" xmlns="http://www.w3.org/2000/svg"
             fill="currentColor" class="w-6 h-6 text-gray-200 transition-colors" viewBox="0 0 23 23">
          <path d="M4 9v6h4l5 5V4L8 9H4z"/>
        </svg>
        <input id="volume-bar" type="range" min="0" max="100" value="60"
               class="w-[120px] h-1 rounded-full cursor-pointer accent-[#ffffff] bg-gray-700/50 shadow-inner" />
      </div>
    </div>
  `,document.body.appendChild(a);const t=a.querySelector("#audio"),o=a.querySelector("#play-btn"),f=a.querySelector("#play-icon"),m=a.querySelector("#player-cover"),u=a.querySelector("#player-title"),c=a.querySelector("#player-artist"),s=a.querySelector("#progress-bar"),n=a.querySelector("#current-time"),e=a.querySelector("#total-time"),d=a.querySelector("#volume-bar"),p=a.querySelector("#prev"),S=a.querySelector("#next"),b=a.querySelector("#repeat-btn"),T=a.querySelector("#repeat-icon"),k=a.querySelector("#random-btn"),_=a.querySelector("#volume-icon");let v=Array.isArray(r)?r.slice():[],x=0,w=!1,L=0,B=!1;t.volume=(d&&d.value?d.value:60)/100;function O(g){if(!g||isNaN(g))return"0:00";const q=Math.floor(g/60),D=Math.floor(g%60).toString().padStart(2,"0");return`${q}:${D}`}function H(){w?f.innerHTML='<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>':f.innerHTML='<path d="M8 5v14l11-7z"/>'}function N(){b.classList.remove("text-[#1DB954]"),T.innerHTML='<path d="M17 1l4 4-4 4V6H7a3 3 0 0 0-3 3v2H2V9a5 5 0 0 1 5-5h10V1zM7 23l-4-4 4-4v3h10a3 3 0 0 0 3-3v-2h2v2a5 5 0 0 1-5 5H7v3z"/>',L===1?b.classList.add("text-[#1DB954]"):L===2&&(b.classList.add("text-[#1DB954]"),T.innerHTML+='<text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor">1</text>')}function C(g){const q=Number(g)||0;_.innerHTML="",q===0?_.innerHTML='<path d="M16.5 12L19 14.5l1.5-1.5L19 11l-2.5 2.5zM4 9v6h4l5 5V4L8 9H4z" />':q<=30?_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14.5 12c0 .8-.4 1.5-1 2"/></svg>':q<=70?_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14 8v8c1-0.7 2-1.8 2-4s-1-3.3-2-4z"/>':_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M15 7v10c2-1.6 3-3.8 3-5s-1-3.4-3-5z"/><path d="M18.5 5.5l1 1"/>'}function z(){try{const g={playlist:v.slice(),index:x,track:v[x]||null};document.dispatchEvent(new CustomEvent("player:trackChange",{detail:g}))}catch(g){console.warn("dispatchTrackChange failed",g)}}function A(g,q=!1){if(!v.length||g<0||g>=v.length){m.src="/svg/whiteSpotify.svg",u.textContent="Your Track",u.className="text-white font-semibold text-lg truncate transition-colors duration-300 hover:text-[#1DB954]",c.textContent="",t.removeAttribute("src"),s&&(s.value=0),n&&(n.textContent="0:00"),e&&(e.textContent="0:00"),w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer(),z();return}x=g;const D=v[g];m.src=D.cover||"/img/default.jpg",u.textContent=D.title||"Unknown",c.textContent=D.artist||"",t.src=D.file,typeof window.__setTopEqualizer=="function"&&window.__setTopEqualizer(g),t.load(),s&&(s.value=0),n&&(n.textContent="0:00"),e&&(e.textContent="0:00"),t.loop=L===2,z(),q?t.play().then(()=>{w=!0,H()}).catch(()=>{w=!1,H()}):(w=!1,H())}function V(){if(!t.src&&v.length){A(x,!0);return}t.play().then(()=>{w=!0,H()}).catch(g=>console.warn("play() blocked:",g))}return window.setPlaylist=(g=[],q=!1)=>{v=Array.isArray(g)?g.slice():[],x=0,A(0,q)},window.playTrack=g=>{if(typeof g=="number"){A(g,!0);return}if(g&&typeof g=="object"){const q=v.findIndex(D=>D.id&&g.id&&D.id===g.id||D.file===g.file);q>=0&&A(q,!0)}},o.addEventListener("click",()=>{if(!t.src){v.length&&A(x,!0);return}if(t.paused)V();else{t.pause(),w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer();return}}),S.addEventListener("click",()=>{v.length&&(B?x=Math.floor(Math.random()*v.length):x=(x+1)%v.length,A(x,!0))}),p.addEventListener("click",()=>{v.length&&(B?x=Math.floor(Math.random()*v.length):x=(x-1+v.length)%v.length,A(x,!0))}),b?.addEventListener("click",()=>{L=(L+1)%3,N(),t.loop=L===2}),k.addEventListener("click",()=>{B=!B,k.classList.toggle("text-[#1DB954]",B)}),t.addEventListener("loadedmetadata",()=>{e&&(e.textContent=O(t.duration))}),t.addEventListener("timeupdate",()=>{t.duration&&!isNaN(t.duration)&&s&&(s.value=t.currentTime/t.duration*100),n&&(n.textContent=O(t.currentTime))}),t.addEventListener("ended",()=>{if(L===2)t.currentTime=0,t.play();else if(v.length){if(B)x=Math.floor(Math.random()*v.length);else if(L===1)x=(x+1)%v.length;else if(x<v.length-1)x++;else{w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer();return}A(x,!0)}}),s?.addEventListener("input",()=>{t.duration&&!isNaN(t.duration)&&(t.currentTime=s.value/100*t.duration)}),d?.addEventListener("input",()=>{const g=d.value;t.volume=g/100,C(g)}),r&&r.length?A(0,!1):A(-1,!1),N(),C(d?d.value:60),{setPlaylist:window.setPlaylist,playTrack:window.playTrack}}function oe(){const r=document.querySelector("#header");r.className="flex items-center justify-between px-4 md:px-6 py-2 bg-transparent sticky top-0 z-50",r.innerHTML=`
    <div class="flex items-center gap-3">
      <button id="burger-btn" aria-label="Open menu" class="md:hidden p-2 rounded-full hover:bg-white/5 active:scale-95 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      <div class="spotify-logo flex items-center gap-2">
        <a href="./index.html"><img class="w-9 md:w-10" src="/svg/white.svg" alt="Spotify Logo" /></a>
      </div>
    </div>
    

    <nav class="flex items-center gap-2 flex-1 justify-center">
      <div id="main-nav" class="hidden md:flex items-center gap-2">
        <button class="p-3 rounded-full bg-neutral-800 transition group active:scale-95">
          <a href="./index.html"><img src="/svg/home.svg" alt="home icon" class="w-5 h-5 group-hover:scale-110 transition" /></a>
        </button>
      </div>

      <div id="search-container" class="relative w-full max-w-[720px] md:w-96 mx-3">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <img src="/svg/search-sidebar.svg" class="w-5 h-5 opacity-70" alt="search icon" />
        </span>

       <input id="search-input" type="search" inputmode="search" autocomplete="off" placeholder="Artists, songs, or podcasts" aria-label="Search" aria-expanded="false" aria-controls="search-dropdown"
  class="w-full pl-14 py-[10px] 
         text-white placeholder-gray-200 
         bg-neutral-900 rounded-full 
         focus:bg-neutral-800 outline-none 
         placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg 
         text-sm sm:text-base md:text-lg
         transition-all duration-200"
/>


        <button id="clear-btn" aria-label="Clear search" class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all duration-200">
          <img src="/svg/clearbtn.svg" class="w-3 h-3hv" alt="Clear" />
        </button>

        <div id="search-dropdown" role="listbox" aria-label="Search results" class="absolute mt-2 w-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl hidden z-50 max-h-[420px] overflow-y-auto"></div>
      </div>
    </nav>

    <div class="flex items-center gap-3">
  <a href="https://open.spotify.com/premium" target="_blank"><button
    class="hidden md:inline-block rounded-full bg-[#1DB954] text-black px-5 py-2 font-bold text-sm
           hover:scale-105 hover:bg-[#1ed760] active:scale-95 transition shadow-lg">
    Explore Premium
  </button>

  <div class="relative">
    <button id="avatarBtn"
      class="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden
             ring-2 ring-transparent hover:ring-[#1DB954] transition duration-200">
      <img src="/img/l_lawliet.jpg" alt="Avatar"
           class="w-full h-full object-cover" />
    </button>

    <div id="avatarMenu"
      class="absolute right-0 mt-3 w-48 bg-neutral-900 text-white text-sm rounded-xl shadow-xl
             opacity-0 scale-95 origin-top-right pointer-events-none transition-all duration-200 z-50">
      <a href="#" class="block px-4 py-3 rounded-t-xl hover:bg-neutral-800 transition"> Profile</a>
      <a href="#" class="block px-4 py-3 hover:bg-neutral-800 transition"> Settings</a>
      <a href="#" class="block px-4 py-3 hover:bg-neutral-800 transition"> Dark Mode</a>
      <div class="border-t border-neutral-700 my-1"></div>
      <a href="#" class="block px-4 py-3 rounded-b-xl text-red-400 hover:bg-neutral-800 transition"> Log out</a>
    </div>
  </div>
</div>



  `;const l=r.querySelector("#burger-btn");l&&l.setAttribute("type","button");const a=document.getElementById("offcanvas-sidebar"),t=document.getElementById("offcanvas-close");let o=document.getElementById("offcanvas-backdrop");o||(o=document.createElement("div"),o.id="offcanvas-backdrop",document.body.appendChild(o));let f=0;function m(){f=window.scrollY||document.documentElement.scrollTop||0,document.body.style.top=`-${f}px`,document.body.classList.add("no-scroll")}function u(){document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,f),f=0}function c(i){i&&i.preventDefault&&i.preventDefault(),a&&(m(),a.classList.add("open"),a.setAttribute("aria-hidden","false"),a.setAttribute("tabindex","-1"),a.focus?.(),o.classList.add("open"),document.addEventListener("keydown",n))}function s(i){i&&i.preventDefault&&i.preventDefault(),a&&(a.classList.remove("open"),a.setAttribute("aria-hidden","true"),o.classList.remove("open"),u(),document.removeEventListener("keydown",n))}function n(i){i.key==="Escape"&&s()}l?.addEventListener("click",c),l?.addEventListener("touchstart",c,{passive:!0}),t?.addEventListener("click",s),t?.addEventListener("touchstart",s,{passive:!0}),o.addEventListener("click",s),o.addEventListener("touchstart",s,{passive:!0}),window.addEventListener("orientationchange",()=>{a&&a.classList.contains("open")&&s()});const e=r.querySelector("#search-input"),d=r.querySelector("#clear-btn"),p=r.querySelector("#search-dropdown"),S=r.querySelector("#search-container"),b=i=>(i||"").toString().toLowerCase().normalize?.("NFD").replace(new RegExp("\\p{M}","gu"),"")||(i||"").toString().toLowerCase(),T=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),k=new Map;[...M.sidebarTracks||[],...M.mainTracks||[]].forEach(i=>{const h=String(i.id??i.file??JSON.stringify(i));k.has(h)||k.set(h,{...i,_key:h})});const _=Array.from(k.values()),v=new Map;let x=[],w=-1,L="";const B=(i,h=220)=>{let y;return(...E)=>{clearTimeout(y),y=setTimeout(()=>i(...E),h)}},O=(i,h)=>{const y=b(h),E=b(i.title),j=b(i.artist);return E===y||j===y?100:E.startsWith(y)?90:j.startsWith(y)?80:E.includes(y)?70:j.includes(y)?60:0},H=(i,h,y)=>{const E=T(y),j=y?new RegExp(`(${E})`,"ig"):null,W=j?i.title.replace(j,'<span class="bg-emerald-600/30 rounded-sm px-[2px]">$1</span>'):i.title,K=j?i.artist.replace(j,'<span class="text-emerald-400">$1</span>'):i.artist;return`
      <div role="option" aria-selected="false" data-search-index="${h}"
  class="search-item group flex items-center gap-3 px-3 py-2 rounded-lg
         hover:bg-gradient-to-r hover:from-neutral-800/70 hover:to-neutral-700/40
         cursor-pointer transition-all duration-200 ease-out
         focus-within:ring-2 focus-within:ring-white/50">

  <div class="relative shrink-0">
    <img loading="lazy" src="${i.cover}" alt="${i.title}"
      class="w-12 h-12 rounded-md object-cover shadow-md 
             group-hover:scale-105 group-hover:shadow-lg transition-transform duration-200 ease-out"/>
    <div class="absolute inset-0 rounded-md bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
  </div>

  <div class="flex flex-col min-w-0">
    <div class="truncate text-sm font-semibold text-white group-hover:text-white transition-colors">
      ${W}
    </div>
    <div class="truncate text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors">
      ${K}
    </div>
  </div>

  <div class="ml-auto opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-200">
    <svg xmlns="http://www.w3.org/2000/svg"
         class="rounded-full w-9 h-9 p-2 bg-green-500 text-white hover:bg-green-600 transition"
         fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </div>
</div>


    `},N=(i,h)=>{if(x=i,w=-1,!i||i.length===0){p.innerHTML='<div class="px-4 py-4 text-sm text-neutral-400">No results</div>',p.classList.remove("hidden"),e.setAttribute("aria-expanded","true");return}const y=8,j=`
      <div class="px-2 py-2 text-sm text-neutral-400 font-semibold">Tracks</div>
      ${i.slice(0,y).map((W,K)=>H(W,K,h)).join("")}
      ${i.length>y?`<div class="px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 cursor-pointer rounded-b-md" data-see-all>See ${i.length} results</div>`:""}
    `;p.innerHTML=j,p.classList.remove("hidden"),e.setAttribute("aria-expanded","true"),g()},C=()=>{p.classList.add("hidden"),e.setAttribute("aria-expanded","false"),w=-1},z=i=>{if(!i){C();return}const h=i.trim();if(h.length===0){C();return}if(v.has(h)){N(v.get(h),i);return}const y=_.map(E=>({t:E,score:O(E,h)})).filter(E=>E.score>0).sort((E,j)=>j.score-E.score).map(E=>E.t);v.set(h,y),N(y,i)},A=B(z,220),V=i=>{const h=p.querySelector('[aria-selected="true"]');h&&h.setAttribute("aria-selected","false");const y=p.querySelector(`[data-search-index="${i}"]`);y?(y.setAttribute("aria-selected","true"),y.classList.add("bg-neutral-800"),y.scrollIntoView({block:"nearest",behavior:"smooth"}),w=i):w=-1},g=()=>{if(p.querySelectorAll("[data-search-index]").forEach(i=>{i.setAttribute("aria-selected","false"),i.classList.remove("bg-neutral-800")}),w>=0){const i=p.querySelector(`[data-search-index="${w}"]`);i&&(i.setAttribute("aria-selected","true"),i.classList.add("bg-neutral-800"))}},q=i=>{const h=x[i];if(h){if(typeof window.setPlaylist=="function"&&typeof window.playTrack=="function")try{window.setPlaylist(x,!0),window.playTrack(i)}catch{U([h])}else U([h]);e.value="",d.classList.add("opacity-0","pointer-events-none"),C()}};p.addEventListener("click",i=>{if(i.target.closest("[data-see-all]")){e.value=L,z(L);return}const y=i.target.closest("[data-search-index]");if(!y)return;const E=Number(y.getAttribute("data-search-index"));q(E)}),e.addEventListener("input",i=>{const h=i.target.value;L=h,h.trim().length?(d.classList.remove("opacity-0","pointer-events-none"),A(h)):(d.classList.add("opacity-0","pointer-events-none"),C())}),e.addEventListener("keydown",i=>{if(p.classList.contains("hidden")){i.key==="ArrowDown"&&(L.trim().length&&A(L),i.preventDefault());return}const h=p.querySelectorAll("[data-search-index]");if(i.key==="ArrowDown"){if(i.preventDefault(),h.length===0)return;w=Math.min(h.length-1,w+1),V(w)}else if(i.key==="ArrowUp"){if(i.preventDefault(),h.length===0)return;w=Math.max(0,w-1),V(w)}else if(i.key==="Enter")if(i.preventDefault(),w>=0)q(w);else{const y=p.querySelector("[data-search-index]");y&&q(Number(y.getAttribute("data-search-index")))}else i.key==="Escape"&&(C(),e.blur())}),d.addEventListener("click",()=>{e.value="",d.classList.add("opacity-0","pointer-events-none"),C(),e.blur()}),document.addEventListener("click",i=>{S.contains(i.target)||C()}),document.addEventListener("keydown",i=>{i.key==="k"&&(i.ctrlKey||i.metaKey)&&(i.preventDefault(),e.focus(),e.select())});const D=document.getElementById("avatarBtn"),I=document.getElementById("avatarMenu");D.addEventListener("click",()=>{const i=I.classList.contains("opacity-100");I.classList.toggle("opacity-100",!i),I.classList.toggle("scale-100",!i),I.classList.toggle("opacity-0",i),I.classList.toggle("scale-95",i),I.classList.toggle("pointer-events-auto",!i),I.classList.toggle("pointer-events-none",i)}),document.addEventListener("click",i=>{!D.contains(i.target)&&!I.contains(i.target)&&(I.classList.add("opacity-0","scale-95","pointer-events-none"),I.classList.remove("opacity-100","scale-100","pointer-events-auto"))})}function ne(){const r=document.querySelector("#playlists");if(!r)return;const l=[...M.sidebarTracks].sort(()=>.5-Math.random()).slice(0,6);r.className="home-center  h-full rounded-xl flex flex-col overflow-hidden min-h-0",r.innerHTML=`
    <div class="convert  overflow-y-auto h-full min-h-0">
      <div class="relative rounded-2xl p-5 mb-2 overflow-hidden shadow-xl border border-white/10 backdrop-blur-lg bg-animated-dark">
        <div class="relative z-10">
          
          <div class="grid grid-cols-2  md:grid-cols-3 gap-4" id="top-tracks"></div>
        </div>
      </div>
      <div class="rounded-xl p-5 flex-1 bg-[#0f0f0f] backdrop-blur-lg pb-40" data-simplebar>
        <div class="flex  mb-8 items-center">
          <h3
  class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight"
>
  Playlists for you
</h3>

          
        </div>
        
        
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6" id="main-tracks"></div>
      </div>
    </div>
  `;const a=r.querySelector("#top-tracks");l.forEach((s,n)=>{const e=document.createElement("div");e.className=`
  group relative flex items-center gap-4 
  bg-white/5 rounded-2xl p-3 cursor-pointer
  hover:bg-white/10 transition-all duration-300
`,e.innerHTML=`
  <div class="flex items-center gap-3 w-full max-w-full">
    <!-- обложка -->
    <div class="relative min-w-[60px] h-[60px] md:min-w-[70px] md:h-[70px] rounded-xl overflow-hidden shadow-md group">
      <img 
        src="${s.cover}" 
        alt="${s.title}" 
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <button class="absolute inset-0 flex items-center justify-center 
                     text-white opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300">
      </button>

      <button class="absolute bottom-3 right-3 w-10 h-10 md:w-12 md:h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-5 h-5 md:w-6 md:h-6">
          <path d="M5 3v18l15-9-15-9z"/>
        </svg>
      </button>
    </div>

    <div class="flex flex-col min-w-0 overflow-hidden">
      <span class="text-white font-bold truncate text-sm sm:text-base md:text-lg lg:text-xl block w-full max-w-[65vw] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]">
        ${s.title}
      </span>
      <span class="text-gray-400 truncate text-xs sm:text-sm md:text-base lg:text-lg block w-full max-w-[60vw] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]">
        ${s.artist}
      </span>
    </div>
  </div>
`,e.addEventListener("click",()=>{P(s.id,{playlist:l,index:n,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(l,!1),typeof window.playTrack=="function"&&window.playTrack(n)}),a.appendChild(e)});const t=r.querySelector("#main-tracks");M.mainTracks.forEach((s,n)=>{const e=document.createElement("div");e.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",e.classList.add("fade-in"),e.style.animationDelay=`${n*.05}s`,e.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${s.cover}" alt="${s.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 z-20 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${s.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${s.artist}</span>
  </div>
`,e.addEventListener("click",()=>{P(s.id,{playlist:M.mainTracks,index:n,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.mainTracks,!1),typeof window.playTrack=="function"&&window.playTrack(n)}),t.appendChild(e)});const o=document.createElement("div");o.className="mt-12",o.innerHTML=`
  <div class="flex mb-8 items-center">
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Top Tracks</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`,r.querySelector(".convert .flex-1").appendChild(o);const f=o.querySelector("#top-tracks-grid");M.topTracks.forEach((s,n)=>{const e=document.createElement("div");e.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",e.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${s.cover}" alt="${s.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${s.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${s.artist}</span>
  </div>
  
`,e.addEventListener("click",()=>{P(s.id,{playlist:M.topTracks,index:n,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.topTracks,!1),typeof window.playTrack=="function"&&window.playTrack(n)}),f.appendChild(e)});const m=document.createElement("div");m.className="mt-12",m.innerHTML=`
  <div class="flex mb-8 items-center">
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Listen Today</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`,r.querySelector(".convert .flex-1").appendChild(m);const u=m.querySelector("#top-tracks-grid");M.listenToday.forEach((s,n)=>{const e=document.createElement("div");e.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",e.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${s.cover}" alt="${s.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 pr-16 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${s.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${s.artist}</span>
  </div>
  
`,e.addEventListener("click",()=>{P(s.id,{playlist:M.listenToday,index:n,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.listenToday,!1),typeof window.playTrack=="function"&&window.playTrack(n)}),u.appendChild(e)});const c=document.createElement("footer");c.className=" text-gray-400 mt-12 px-8 py-12  ",c.innerHTML=`
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <div>
      <h3 class="text-white font-bold mb-3">Компания</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">О нас</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Вакансии</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">For the Record</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Сообщества</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для исполнителей</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для разработчиков</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Реклама</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для инвесторов</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Для вендоров</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Полезные ссылки</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Справка</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Бесплатное мобильное приложение</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Популярное в разных странах</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Import your music</a></li>
      </ul>
    </div>
    <div>
      <h3 class="text-white font-bold mb-3">Планы Spotify</h3>
      <ul class="space-y-2">
        <li><a href="#" class="hover:text-white transition-colors duration-200">Индивидуальная подписка</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Spotify Premium</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для двоих</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для семьи</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Premium для студентов</a></li>
        <li><a href="#" class="hover:text-white transition-colors duration-200">Бесплатная версия Spotify</a></li>
      </ul>
    </div>
  </div>
  <div class="border-t border-gray-700 mt-8 pt-6 text-sm flex flex-wrap justify-between">
    <div class="flex flex-wrap gap-4 mb-4 md:mb-0">
      <a href="#" class="hover:text-white transition-colors duration-200">Юридическая информация</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Центр безопасности и конфиденциальности</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Политика конфиденциальности</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Файлы cookie</a>
      <a href="#" class="hover:text-white transition-colors duration-200">О рекламе</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Специальные возможности</a>
    </div>
    <p>© 2025 Spotify AB</p>
  </div>
`,r.querySelector(".convert .flex-1").appendChild(c)}document.addEventListener("DOMContentLoaded",()=>{oe(),U(),ae(),ne();const r=document.getElementById("library-buttons");r&&se(r),document.querySelectorAll(".playlist-item").forEach(e=>{e.addEventListener("mouseenter",()=>e.classList.add("active")),e.addEventListener("mouseleave",()=>e.classList.remove("active")),e.addEventListener("touchstart",()=>e.classList.add("active")),e.addEventListener("touchend",()=>e.classList.remove("active"))});const a=document.querySelectorAll("#main-nav .nav-link");a.forEach(e=>{e.addEventListener("click",d=>{d.preventDefault(),a.forEach(p=>p.classList.remove("active")),e.classList.add("active")})});const t=document.getElementById("search-input"),o=document.getElementById("search-dropdown"),f=document.getElementById("clear-btn"),m=document.getElementById("mobile-search-overlay");t&&o&&f&&(t.addEventListener("focus",()=>{window.innerWidth<768&&m?(m.classList.remove("hidden"),m.querySelector("input")?.focus()):o.classList.remove("hidden")}),t.addEventListener("input",()=>{t.value.trim()!==""?f.classList.remove("opacity-0","pointer-events-none"):f.classList.add("opacity-0","pointer-events-none")}),f.addEventListener("click",()=>{t.value="",f.classList.add("opacity-0","pointer-events-none"),t.focus()}),document.addEventListener("click",e=>{e.target.closest("#search-container")||o.classList.add("hidden")})),m&&m.querySelector(".close-search")?.addEventListener("click",()=>{m.classList.add("hidden")});const u=document.getElementById("burger-btn"),c=document.getElementById("offcanvas-sidebar"),s=document.getElementById("offcanvas-close");u&&c&&u.addEventListener("click",()=>{c.classList.toggle("translate-x-0"),c.classList.toggle("translate-x-[-100%]"),c.classList.toggle("opacity-100"),c.classList.toggle("opacity-0")}),s&&c&&s.addEventListener("click",()=>{c.classList.add("translate-x-[-100%]","opacity-0")});const n=document.querySelectorAll(".filter-btn");n.forEach(e=>{e.addEventListener("click",()=>{n.forEach(d=>d.classList.remove("active-btn")),e.classList.add("active-btn")})}),window.addEventListener("resize",()=>{const e=document.getElementById("offcanvas-sidebar");e&&window.innerWidth>=768&&e.classList.add("translate-x-[-100%]","opacity-0");const d=document.getElementById("mobile-search-overlay");d&&window.innerWidth>=768&&d.classList.add("hidden")})});
