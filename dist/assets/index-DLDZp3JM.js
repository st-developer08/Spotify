(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&e(m)}).observe(document,{childList:!0,subtree:!0});function i(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function e(o){if(o.ep)return;o.ep=!0;const f=i(o);fetch(o.href,f)}})();const Y=[{id:1,title:"ZXCURSED",artist:"Cursed",cover:"/img/ab67706c0000d72c7566f92df6b11f62825ffd9d.webp",file:"/music/все песни shadowraze + zxcursed.m4a"},{id:2,title:"All want is you",artist:"Rebzyyx",cover:"/img/all want is you.webp",file:"/music/Rebzyyx - all i want is you _Official Audio_.mp3"},{id:3,title:"AURA SONGS",artist:"Phonk",cover:"/img/AURA SONGS.webp",file:"/music/MONTAGEM_BATCHI_Super_Slowed_+_Reverb_BRAZILIAN_PHONK_5BupLl_X.m4a"},{id:4,title:"Nuts",artist:"Lil Peep",cover:"/img/lil peep.webp",file:"/music/Lil_Peep_nuts_feat_rainy_bear_Official_Audio_osPq9Yb8xm8.m4a"},{id:5,title:"METAMORPHOSIS",artist:"metamorph",cover:"/img/metamorphosis 1 hour.jpg",file:"/music/INTERWORLD_METAMORPHOSIS-[317RHaFF7Xk].m4a"},{id:6,title:"ShO`nen",artist:"Rebzyyx",cover:"/img/shonen.jpg",file:"/music/廻廻奇譚 - Eve MV(Live Film ver).m4a"},{id:7,title:"JUDAS",artist:"Lady Gaga",cover:"/img/judas.jpg",file:"/music/JUDAS x GOJO vs SUKUNA _ EPIC BATTLE _ ANIME VOICES _Jujutsu Kai.mp3"},{id:8,title:"Starboy",artist:"The WEEKND",cover:"/img/weeknd.jpg",file:"/music/The_Weeknd_JENNIE_Lily_Rose_Depp_One_Of_The_Girls_Official_Vid.m4a"},{id:9,title:"Who am I?",artist:"WUTIWANT",cover:"/img/wutiwant.jpg",file:"/music/K1LLGRAIN, saraunh0ly - wutiwant (K1LLGRAIN REMIX).m4a"},{id:10,title:"Die with a Smile",artist:"Lady Gaga",cover:"/img/diewithasmile.webp",file:"/music/Lady_Gaga_Bruno_Mars_Die_With_A_Smile_Official_Music_Video_kP.m4a"},{id:11,title:"Heavy Love",artist:"Odetari",cover:"/img/odetari.webp",file:"/music/Odetari - Heavy Love (Official Audio).m4a"},{id:12,title:"One Dance",artist:"Drake",cover:"/img/one dance  Drake big.jpg",file:"/music/Drake - One Dance _Lyrics_ ft.Wizkid _ Kyla.mp3"},{id:13,title:"I Wanna Be Yours",artist:"Arctic Monkeys",cover:"/img/i wanna be your.jpg",file:"/music/Arctic_Monkeys_-_I_Wanna_Be_Yours-[fukGbiPuBjU].m4a"},{id:14,title:"Summertime Saddness",artist:"Lana Del Rey",cover:"/img/summertime.jpg",file:"/music/Lana_Del_Rey_-_Summertime_Sadness_Lyrics-[zQO7J483Dng].m4a"},{id:15,title:"Superhero",artist:"Metro Boomin",cover:"/img/superhero.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:16,title:"Levitating",artist:"Dua Lipa",cover:"/img/Levitating.jpg",file:"/music/Dua Lipa - Levitating (Lyrics).m4a"},{id:17,title:"Agudo Mágico 3",artist:"MC K.K",cover:"/img/agudo magico.jpg",file:"/music/Agudo_Mágico_3_MC_K_K_Dj_TG_Beats_Dj_Aurelio_MC_Lipivox_12.mp3"},{id:18,title:"Sweater Weather",artist:"The Neighbourhood",cover:"/img/swether.jpg",file:"/music/The Neighbourhood - Sweater Weather _Lyrics_.mp3"},{id:19,title:"Starboy",artist:"The Weeknd",cover:"/img/starboy.jpg",file:"/music/The Weeknd - Starboy (Lyrics) ft. Daft Punk.m4a"},{id:20,title:"Blinding Lights",artist:"The Weeknd",cover:"/img/Blinding Lights.jpg",file:"/music/The_Weeknd_-_Blinding_Lights_Official_Video-[4NRXx6U8ABQ].m4a"},{id:21,title:"Bad guy",artist:"Billie Eilish",cover:"/img/bad guy.jpg",file:"/music/Bad guy   Billie Eilish.mp3"},{id:22,title:"Shape of You",artist:"Ed Sheeran",cover:"/img/Ed Sheran.webp",file:"/music/Shapeof you (Produse 101 Major Lazer remix)   Ed Sheeran.mp3"},{id:23,title:"Poker Face",artist:"Lady Gaga",cover:"/img/pokerface.jpg",file:"/music/Pokerface (Originally Performed By Lady Gaga) [Karaoke Versi.mp3"},{id:24,title:"Rolling in the Deep",artist:"Adele",cover:"/img/rolling.jpg",file:"/music/01 - Adele - Rolling In The Deep.mp3"},{id:25,title:"Believer",artist:"Imagine Dragons",cover:"/img/believer.jpg",file:"/music/Believer.mp3"}],Q=[{id:1,title:"Phonk Instinct",artist:"PHONK",cover:"/img/Phonk instinct - big.jpg",file:"/music/MONTAGEM_BATCHI_Super_Slowed_+_Reverb_BRAZILIAN_PHONK_5BupLl_X.m4a"},{id:2,title:"GYMCORE",artist:"gym",cover:"/img/gymcore -big.jpg",file:"/music/gymcore, Shyron   HÄRKÄ - IMMORTAL FUNK [Brazilian Phonk].m4a"},{id:3,title:"One Dance",artist:"Drake",cover:"/img/one dance  Drake big.jpg",file:"/music/Drake - One Dance _Lyrics_ ft.Wizkid _ Kyla.mp3"},{id:4,title:"I Wanna Be Yours",artist:"Arctic Monkeys",cover:"/img/i wanna be your.jpg",file:"/music/Arctic_Monkeys_-_I_Wanna_Be_Yours-[fukGbiPuBjU].m4a"},{id:5,title:"Summertime Saddness",artist:"Lana Del Rey",cover:"/img/summertime.jpg",file:"/music/Lana_Del_Rey_-_Summertime_Sadness_Lyrics-[zQO7J483Dng].m4a"},{id:6,title:"Superhero",artist:"Metro Boomin",cover:"/img/superhero.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:7,title:"Superman",artist:"Eminem",cover:"/img/eminem-superman.jpg",file:"/music/Metro_Boomin_Future_Superhero_Heroes_Villains_Official_Music_V.m4a"},{id:8,title:"ShO`nen",artist:"Rebzyyx",cover:"/img/shonen.jpg",file:"/music/廻廻奇譚 - Eve MV(Live Film ver).m4a"},{id:9,title:"Mockingbird",artist:"Eminem",cover:"/img/mockinbird.jpg",file:"/music/Eminem_-_Mockingbird_Lyrics-[37V3b39_EXw].m4a"},{id:10,title:"Heavy Love",artist:"Odetari",cover:"/img/odetari.webp",file:"/music/Odetari - Heavy Love (Official Audio).m4a"}],Z=[{id:11,title:"Blinding Lights",artist:"The Weeknd",cover:"/img/Blinding Lights.jpg",file:"/music/The_Weeknd_-_Blinding_Lights_Official_Video-[4NRXx6U8ABQ].m4a"},{id:12,title:"Levitating",artist:"Dua Lipa",cover:"/img/Levitating.jpg",file:"/music/Dua Lipa - Levitating (Lyrics).m4a"},{id:13,title:"Starboy",artist:"The Weeknd",cover:"/img/starboy.jpg",file:"/music/The Weeknd - Starboy (Lyrics) ft. Daft Punk.m4a"},{id:14,title:"Sweater Weather",artist:"The Neighbourhood",cover:"/img/swether.jpg",file:"/music/The Neighbourhood - Sweater Weather _Lyrics_.mp3"},{id:15,title:"Agudo Mágico 3",artist:"MC K.K",cover:"/img/agudo magico.jpg",file:"/music/Agudo_Mágico_3_MC_K_K_Dj_TG_Beats_Dj_Aurelio_MC_Lipivox_12.mp3"}],ee=[{id:16,title:"Shape of You",artist:"Ed Sheeran",cover:"/img/Ed Sheran.webp",file:"/music/Shapeof you (Produse 101 Major Lazer remix)   Ed Sheeran.mp3"},{id:17,title:"Bad guy",artist:"Billie Eilish",cover:"/img/bad guy.jpg",file:"/music/Bad guy   Billie Eilish.mp3"},{id:18,title:"Poker Face",artist:"Lady Gaga",cover:"/img/pokerface.jpg",file:"/music/Pokerface (Originally Performed By Lady Gaga) [Karaoke Versi.mp3"},{id:19,title:"Rolling in the Deep",artist:"Adele",cover:"/img/rolling.jpg",file:"/music/01 - Adele - Rolling In The Deep.mp3"},{id:20,title:"Believer",artist:"Imagine Dragons",cover:"/img/believer.jpg",file:"/music/Believer.mp3"}],M={sidebarTracks:Y,mainTracks:Q,topTracks:Z,listenToday:ee};function N(r,c={}){const i=document.querySelector("#main-content")||document.querySelector("#playlists")||document.querySelector("main")||document.body;if(!i)return;const e=Array.isArray(c.playlist)?c.playlist.slice():M.sidebarTracks.slice();let o=typeof c.index=="number"?c.index:e.findIndex(n=>String(n.id)===String(r));o<0&&(o=0);const f=e[o]||e[0]||{cover:"/img/default.jpg",title:"Unknown",artist:""},m=e.map((n,s)=>{const d=n.cover||"/img/song-cover.png";return`
      <tr
        class="song-row ${s===o?"bg-gradient-to-r from-[#1DB954]/20 to-transparent":"hover:bg-white/5"}
               transition-all duration-200 cursor-pointer group rounded-md"
        data-index="${s}" data-id="${n.id}"
      >
        <td class="py-3 px-4 text-neutral-400 w-[48px] md:w-[60px] font-medium text-sm text-center">
  <span class="group-hover:hidden block">${s+1}</span>
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
      `}).join("");i.innerHTML=`
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
        ${e.length} songs
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <p class="text-neutral-300 text-sm font-semibold uppercase tracking-wide">Public Playlist</p>
      <h1 class="text-white font-extrabold text-2xl md:text-[48px] leading-tight tracking-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">${$(f.title)}</h1>
      <div class="flex items-center gap-3 text-neutral-300">
        <span class="text-neutral-300">${$(f.artist)}</span>
        <div class="h-1 w-1 rounded-full bg-neutral-600"></div>
        <span class="text-neutral-400">${Math.max(0,e.length)} tracks</span>
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
`;const u=i.querySelector("#play-all");u&&u.addEventListener("click",()=>{typeof window.setPlaylist=="function"?window.setPlaylist(e,!0):console.warn("setPlaylist not found")});const a=Array.from(i.querySelectorAll(".song-row"));(function(s){s.forEach(d=>{if(d.dataset.color)return;const p=d.querySelector(".row-cover");p&&R(p).then(S=>S||G(p.src)).then(S=>{S&&(d.dataset.color=JSON.stringify(S))}).catch(()=>{})})})(a),a.forEach(n=>{n.addEventListener("click",async()=>{const s=Number(n.dataset.index);typeof window.setPlaylist=="function"&&window.setPlaylist(e,!1),typeof window.playTrack=="function"&&window.playTrack(s),await l(s)})});async function l(n){i.querySelectorAll(".song-row").forEach(T=>{T.classList.remove("bg-gradient-to-r","from-[#1DB954]/20","to-transparent"),T.style.backgroundImage="",T.style.boxShadow=""});const d=i.querySelector(`.song-row[data-index="${n}"]`);if(!d)return;d.classList.add("bg-gradient-to-r","from-[#1DB954]/20","to-transparent");let p=null;if(d.dataset.color)try{p=JSON.parse(d.dataset.color)}catch{p=null}const S=d.querySelector(".row-cover");p||(p=await R(S).catch(()=>null),p||(p=await G(S?.src).catch(()=>null)),p||(p={r:29,g:185,b:84,hex:"#1DB954"}),d.dataset.color=JSON.stringify(p)),J(d,p),X(i,p);const x=e[n];if(x){const T=i.querySelector("section img.object-cover"),k=i.querySelector("section h1, section h2"),_=i.querySelector("section .text-neutral-300");T&&(T.src=x.cover||"/img/default.jpg"),k&&(k.textContent=x.title||""),_&&(_.textContent=`${x.artist||""} • ${e.length} songs`);const g=ie(p);k&&(k.style.color=g==="#fff")}window.__currentSongsView=window.__currentSongsView||{},window.__currentSongsView.selectedIndex=n,window.__currentSongsView.playlistIds=e.map(T=>String(T.id))}c.autoplay&&(typeof window.setPlaylist=="function"&&window.setPlaylist(e,!1),typeof window.playTrack=="function"&&window.playTrack(o)),l(o),window.__applySongColor=async function(n,s,d){if(!s||!n)return;let p=null;if(s.dataset.color)try{p=JSON.parse(s.dataset.color)}catch{p=null}if(!p){const S=s.querySelector(".row-cover");p=await R(S).catch(()=>null),p||(p=await G(d).catch(()=>null)),p||(p={r:29,g:185,b:84,hex:"#1DB954"}),s.dataset.color=JSON.stringify(p)}J(s,p),X(n,p)},window.__currentSongsView={playlistIds:e.map(n=>String(n.id)),selectedIndex:o}}document.addEventListener("player:trackChange",r=>{try{const{playlist:c,index:i,track:e}=r.detail||{};if(!c||c.length===0)return;const o=c.map(m=>String(m.id)),f=window.__currentSongsView;if(f&&te(f.playlistIds,o)){const m=document.querySelector("#main-content")||document.querySelector("#playlists")||document.querySelector("main")||document.body,u=Number(i||0),a=m.querySelector(`.song-row[data-index="${u}"]`);if(a){m.querySelectorAll(".song-row").forEach(d=>d.classList.remove("bg-gradient-to-r","from-[#1DB954]/20","to-transparent")),a.classList.add("bg-gradient-to-r","from-[#1DB954]/20","to-transparent");const l=m.querySelector("section img.object-cover"),n=m.querySelector("section h1, section h2"),s=m.querySelector("section .text-neutral-300");l&&e&&(l.src=e.cover||"/img/default.jpg"),n&&e&&(n.textContent=e.title||""),s&&e&&(s.textContent=`${e.artist||""} • ${o.length} songs`),window.__currentSongsView.selectedIndex=u,typeof window.__applySongColor=="function"&&window.__applySongColor(m,a,e?.cover)}return}if(typeof N=="function"){const m=e&&e.id?e.id:c[0]?.id;N(m,{playlist:c,index:i,autoplay:!1})}}catch(c){console.error("player:trackChange handler error:",c)}});function te(r,c){if(!r||!c||r.length!==c.length)return!1;for(let i=0;i<r.length;i++)if(String(r[i])!==String(c[i]))return!1;return!0}function $(r){return r==null?"":String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function F([r,c,i]){const e=o=>o.toString(16).padStart(2,"0");return`#${e(r)}${e(c)}${e(i)}`}function ie({r,g:c,b:i}){return(r*299+c*587+i*114)/1e3>=128?"#000":"#fff"}function R(r){return new Promise(c=>{if(!r)return c(null);function i(){try{const e=document.createElement("canvas"),o=e.getContext("2d"),f=40,m=Math.round(r.naturalHeight/r.naturalWidth*f)||40;e.width=f,e.height=m,o.drawImage(r,0,0,f,m);const u=o.getImageData(0,0,f,m).data,a={};let l=0;for(let x=0;x<u.length;x+=4){if(u[x+3]<125)continue;let k=u[x],_=u[x+1],g=u[x+2];if(k>240&&_>240&&g>240||k<10&&_<10&&g<10)continue;const b=k>>4,w=_>>4,L=g>>4,B=b<<8|w<<4|L;a[B]||(a[B]={count:0,rSum:0,gSum:0,bSum:0}),a[B].count++,a[B].rSum+=k,a[B].gSum+=_,a[B].bSum+=g,l++}let n=null;for(const x in a)(!n||a[x].count>a[n].count)&&(n=x);if(!n){let x=0,T=0,k=0,_=0;for(let L=0;L<u.length;L+=4)u[L+3]<125||(x+=u[L],T+=u[L+1],k+=u[L+2],_++);if(_===0)return c(null);const g=Math.round(x/_),b=Math.round(T/_),w=Math.round(k/_);return c({r:g,g:b,b:w,hex:F([g,b,w])})}const s=a[n],d=Math.round(s.rSum/s.count),p=Math.round(s.gSum/s.count),S=Math.round(s.bSum/s.count);c({r:d,g:p,b:S,hex:F([d,p,S])})}catch{c(null)}}if(r.complete&&r.naturalWidth)i();else{const e=()=>{r.removeEventListener("load",e),r.removeEventListener("error",o),i()},o=()=>{r.removeEventListener("load",e),r.removeEventListener("error",o),c(null)};r.addEventListener("load",e),r.addEventListener("error",o)}})}function G(r){return new Promise(c=>{if(!r)return c(null);const i=new Image;i.crossOrigin="Anonymous",i.src=r,i.onload=async()=>{const e=await R(i);c(e)},i.onerror=()=>c(null)})}function J(r,c){if(!r)return;c||(c={r:29,g:185,b:84,hex:"#1DB954"});const{r:i,g:e,b:o}=c;r.style.backgroundImage=`linear-gradient(90deg, rgba(${i},${e},${o},0.18) 0%, rgba(${i},${e},${o},0.06) 40%, transparent 100%)`,r.style.boxShadow=`inset 6px 0 18px rgba(${i},${e},${o},0.07)`}function X(r,c){if(!r)return;c||(c={r:29,g:185,b:84});const{r:i,g:e,b:o}=c,f=r.querySelector(".songs-page .absolute.inset-0");if(!f)return;const m=f.querySelector("div");m&&(m.style.background=`linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(${i},${e},${o},0.10) 30%, rgba(0,0,0,0.95) 100%)`,m.style.transition="background 300ms ease")}function re(){const r=document.querySelector("#sidebar");if(!r)return;r.className="hidden md:flex flex-col gap-2 w-full h-[95%] overflow-hidden",r.innerHTML=`
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
  `;const c=document.getElementById("mobile-sidebar-placeholder");c&&(c.innerHTML='<ul id="mobile-sidebar-tracks" class="flex flex-col gap-2"></ul>');const i=r.querySelector("#sidebar-tracks"),e=document.querySelector("#mobile-sidebar-tracks");function o(){i.querySelectorAll(".playlist-item").forEach(u=>{u.classList.remove("bg-gradient-to-r","from-[#1db95433]","to-transparent");const a=u.querySelector("img"),l=u.querySelector(".playlist-title"),n=u.querySelector(".playlist-artist"),s=u.querySelector(".active-icon");a&&a.classList.remove("ring-2","ring-[#1DB954]"),l&&(l.classList.remove("text-[#1DB954]"),l.classList.add("text-white")),n&&n.classList.remove("text-gray-300"),s&&s.classList.add("hidden")}),e&&e.querySelectorAll(".playlist-item").forEach(u=>{u.classList.remove("bg-gradient-to-r","from-[#1db95433]","to-transparent","opacity-100")})}M.sidebarTracks.forEach((u,a)=>{const l=document.createElement("li");l.className="playlist-item group relative flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors",l.dataset.index=String(a),l.innerHTML=`
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
    `;const n=l.cloneNode(!0),s=()=>{if(N(u.id,{playlist:M.sidebarTracks,index:a,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.sidebarTracks,!1),typeof window.playTrack=="function"&&window.playTrack(a),o(),l.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),l.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),l.querySelector(".playlist-title").classList.remove("text-white"),l.querySelector(".playlist-title").classList.add("text-[#1DB954]"),l.querySelector(".playlist-artist").classList.add("text-gray-300"),l.querySelector(".active-icon").classList.remove("hidden"),n){n.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent");const p=n.querySelector("img");p&&p.classList.add("ring-2","ring-[#1DB954]");const S=n.querySelector(".playlist-title");S&&(S.classList.remove("text-white"),S.classList.add("text-[#1DB954]"))}const d=document.getElementById("offcanvas-sidebar");d&&window.innerWidth<768&&d.classList.add("translate-x-[-100%]","opacity-0")};l.addEventListener("click",s),l.addEventListener("touchstart",()=>l.classList.add("active")),l.addEventListener("touchend",()=>l.classList.remove("active")),i.appendChild(l),e&&(n.addEventListener("click",s),e.appendChild(n))});const f=M.sidebarTracks.map(u=>String(u.id));document.addEventListener("player:trackChange",u=>{try{const{playlist:a,index:l}=u.detail||{};if(!a||!Array.isArray(a)){o();return}const n=a.map(s=>String(s.id));if(m(n,f)){const s=Number(l);if(!Number.isNaN(s)&&s>=0&&s<i.children.length)if(typeof window.__setSidebarActive=="function")window.__setSidebarActive(s);else{o();const d=i.querySelectorAll(".playlist-item")[s];d&&(d.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),d.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),d.querySelector(".playlist-title").classList.remove("text-white"),d.querySelector(".playlist-title").classList.add("text-[#1DB954]"),d.querySelector(".playlist-artist").classList.add("text-gray-300"),d.querySelector(".active-icon").classList.remove("hidden"),d.scrollIntoView({behavior:"smooth",block:"nearest"}))}else o()}else o()}catch(a){alert.warn("sidebar sync error:",a)}}),window.__setSidebarActive=function(u){o();const a=i.querySelectorAll(".playlist-item")[Number(u)];if(a){a.classList.add("bg-gradient-to-r","from-[#1db95433]","to-transparent"),a.querySelector("img").classList.add("ring-2","ring-[#1DB954]"),a.querySelector(".playlist-title").classList.remove("text-white"),a.querySelector(".playlist-title").classList.add("text-[#1DB954]"),a.querySelector(".playlist-artist").classList.add("text-gray-300");const l=a.querySelector(".active-icon");l&&l.classList.remove("hidden"),a.scrollIntoView({behavior:"smooth",block:"nearest"})}},window.__clearSidebarActive=function(){o()};function m(u,a){if(!Array.isArray(u)||!Array.isArray(a)||u.length!==a.length)return!1;for(let l=0;l<u.length;l++)if(String(u[l])!==String(a[l]))return!1;return!0}}function ae(r){let c=!1,i,e;r.addEventListener("mousedown",o=>{c=!0,i=o.pageX-r.offsetLeft,e=r.scrollLeft}),r.addEventListener("mouseleave",()=>{c=!1,r.style.background="none",r.style.opacity="1"}),r.addEventListener("mouseup",()=>{c=!1,r.style.background="none",r.style.opacity="1"}),r.addEventListener("mousemove",o=>{if(!c)return;o.preventDefault();const m=o.pageX-r.offsetLeft-i;r.scrollLeft=e-m*1})}function U(r=[]){const c=document.querySelector(".player");c&&c.remove();const i=document.createElement("div");i.className="player z-50 fixed bottom-0 left-0 w-full md:left-1/2 md:-translate-x-1/2 md:w-[100%] bg-black/95 backdrop-blur-3xl rounded-t-xl md:rounded-1xl shadow-[0_8px_25px_rgba(0,0,0,0.7)] transition-all duration-300",i.innerHTML=`
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

      <!-- Center: controls (responsive) -->
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

        <!-- Progress bar: on mobile show small bar, on md show times -->
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
  `,document.body.appendChild(i);const e=i.querySelector("#audio"),o=i.querySelector("#play-btn"),f=i.querySelector("#play-icon"),m=i.querySelector("#player-cover"),u=i.querySelector("#player-title"),a=i.querySelector("#player-artist"),l=i.querySelector("#progress-bar"),n=i.querySelector("#current-time"),s=i.querySelector("#total-time"),d=i.querySelector("#volume-bar"),p=i.querySelector("#prev"),S=i.querySelector("#next"),x=i.querySelector("#repeat-btn"),T=i.querySelector("#repeat-icon"),k=i.querySelector("#random-btn"),_=i.querySelector("#volume-icon");let g=Array.isArray(r)?r.slice():[],b=0,w=!1,L=0,B=!1;e.volume=(d&&d.value?d.value:60)/100;function O(v){if(!v||isNaN(v))return"0:00";const q=Math.floor(v/60),D=Math.floor(v%60).toString().padStart(2,"0");return`${q}:${D}`}function H(){w?f.innerHTML='<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>':f.innerHTML='<path d="M8 5v14l11-7z"/>'}function P(){x.classList.remove("text-[#1DB954]"),T.innerHTML='<path d="M17 1l4 4-4 4V6H7a3 3 0 0 0-3 3v2H2V9a5 5 0 0 1 5-5h10V1zM7 23l-4-4 4-4v3h10a3 3 0 0 0 3-3v-2h2v2a5 5 0 0 1-5 5H7v3z"/>',L===1?x.classList.add("text-[#1DB954]"):L===2&&(x.classList.add("text-[#1DB954]"),T.innerHTML+='<text x="12" y="16" text-anchor="middle" font-size="10" fill="currentColor">1</text>')}function C(v){const q=Number(v)||0;_.innerHTML="",q===0?_.innerHTML='<path d="M16.5 12L19 14.5l1.5-1.5L19 11l-2.5 2.5zM4 9v6h4l5 5V4L8 9H4z" />':q<=30?_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14.5 12c0 .8-.4 1.5-1 2"/></svg>':q<=70?_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M14 8v8c1-0.7 2-1.8 2-4s-1-3.3-2-4z"/>':_.innerHTML='<path d="M4 9v6h4l5 5V4L8 9H4z"/><path d="M15 7v10c2-1.6 3-3.8 3-5s-1-3.4-3-5z"/><path d="M18.5 5.5l1 1"/>'}function z(){try{const v={playlist:g.slice(),index:b,track:g[b]||null};document.dispatchEvent(new CustomEvent("player:trackChange",{detail:v}))}catch(v){console.warn("dispatchTrackChange failed",v)}}function A(v,q=!1){if(!g.length||v<0||v>=g.length){m.src="/svg/whiteSpotify.svg",u.textContent="Your Track",u.className="text-white font-semibold text-lg truncate transition-colors duration-300 hover:text-[#1DB954]",a.textContent="",e.removeAttribute("src"),l&&(l.value=0),n&&(n.textContent="0:00"),s&&(s.textContent="0:00"),w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer(),z();return}b=v;const D=g[v];m.src=D.cover||"/img/default.jpg",u.textContent=D.title||"Unknown",a.textContent=D.artist||"",e.src=D.file,typeof window.__setTopEqualizer=="function"&&window.__setTopEqualizer(v),e.load(),l&&(l.value=0),n&&(n.textContent="0:00"),s&&(s.textContent="0:00"),e.loop=L===2,z(),q?e.play().then(()=>{w=!0,H()}).catch(()=>{w=!1,H()}):(w=!1,H())}function V(){if(!e.src&&g.length){A(b,!0);return}e.play().then(()=>{w=!0,H()}).catch(v=>console.warn("play() blocked:",v))}return window.setPlaylist=(v=[],q=!1)=>{g=Array.isArray(v)?v.slice():[],b=0,A(0,q)},window.playTrack=v=>{if(typeof v=="number"){A(v,!0);return}if(v&&typeof v=="object"){const q=g.findIndex(D=>D.id&&v.id&&D.id===v.id||D.file===v.file);q>=0&&A(q,!0)}},o.addEventListener("click",()=>{if(!e.src){g.length&&A(b,!0);return}if(e.paused)V();else{e.pause(),w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer();return}}),S.addEventListener("click",()=>{g.length&&(B?b=Math.floor(Math.random()*g.length):b=(b+1)%g.length,A(b,!0))}),p.addEventListener("click",()=>{g.length&&(B?b=Math.floor(Math.random()*g.length):b=(b-1+g.length)%g.length,A(b,!0))}),x?.addEventListener("click",()=>{L=(L+1)%3,P(),e.loop=L===2}),k.addEventListener("click",()=>{B=!B,k.classList.toggle("text-[#1DB954]",B)}),e.addEventListener("loadedmetadata",()=>{s&&(s.textContent=O(e.duration))}),e.addEventListener("timeupdate",()=>{e.duration&&!isNaN(e.duration)&&l&&(l.value=e.currentTime/e.duration*100),n&&(n.textContent=O(e.currentTime))}),e.addEventListener("ended",()=>{if(L===2)e.currentTime=0,e.play();else if(g.length){if(B)b=Math.floor(Math.random()*g.length);else if(L===1)b=(b+1)%g.length;else if(b<g.length-1)b++;else{w=!1,H(),typeof window.__clearTopEqualizer=="function"&&window.__clearTopEqualizer();return}A(b,!0)}}),l?.addEventListener("input",()=>{e.duration&&!isNaN(e.duration)&&(e.currentTime=l.value/100*e.duration)}),d?.addEventListener("input",()=>{const v=d.value;e.volume=v/100,C(v)}),r&&r.length?A(0,!1):A(-1,!1),P(),C(d?d.value:60),{setPlaylist:window.setPlaylist,playTrack:window.playTrack}}function se(){const r=document.querySelector("#header");r.className="flex items-center justify-between px-4 md:px-6 py-2 bg-transparent sticky top-0 z-50",r.innerHTML=`
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

        <input id="search-input" type="search" inputmode="search" autocomplete="off" placeholder="Artists, songs, or podcasts"
          aria-label="Search" aria-expanded="false" aria-controls="search-dropdown"
          class="w-full pl-14  py-[10px] text-white bg-neutral-900 rounded-full focus:bg-neutral-800 outline-none placeholder-gray-200 transition-all duration-200 " />

        <button id="clear-btn" aria-label="Clear search" class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 pointer-events-none transition-all duration-200">
          <img src="/svg/clearbtn.svg" class="w-3 h-3hv" alt="Clear" />
        </button>

        <div id="search-dropdown" role="listbox" aria-label="Search results" class="absolute mt-2 w-full bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl hidden z-50 max-h-[420px] overflow-y-auto"></div>
      </div>
    </nav>

    <div class="flex items-center gap-3">
  <button
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



  `;const c=r.querySelector("#burger-btn");c&&c.setAttribute("type","button");const i=document.getElementById("offcanvas-sidebar"),e=document.getElementById("offcanvas-close");let o=document.getElementById("offcanvas-backdrop");o||(o=document.createElement("div"),o.id="offcanvas-backdrop",document.body.appendChild(o));let f=0;function m(){f=window.scrollY||document.documentElement.scrollTop||0,document.body.style.top=`-${f}px`,document.body.classList.add("no-scroll")}function u(){document.body.classList.remove("no-scroll"),document.body.style.top="",window.scrollTo(0,f),f=0}function a(t){t&&t.preventDefault&&t.preventDefault(),i&&(m(),i.classList.add("open"),i.setAttribute("aria-hidden","false"),i.setAttribute("tabindex","-1"),i.focus?.(),o.classList.add("open"),document.addEventListener("keydown",n))}function l(t){t&&t.preventDefault&&t.preventDefault(),i&&(i.classList.remove("open"),i.setAttribute("aria-hidden","true"),o.classList.remove("open"),u(),document.removeEventListener("keydown",n))}function n(t){t.key==="Escape"&&l()}c?.addEventListener("click",a),c?.addEventListener("touchstart",a,{passive:!0}),e?.addEventListener("click",l),e?.addEventListener("touchstart",l,{passive:!0}),o.addEventListener("click",l),o.addEventListener("touchstart",l,{passive:!0}),window.addEventListener("orientationchange",()=>{i&&i.classList.contains("open")&&l()});const s=r.querySelector("#search-input"),d=r.querySelector("#clear-btn"),p=r.querySelector("#search-dropdown"),S=r.querySelector("#search-container"),x=t=>(t||"").toString().toLowerCase().normalize?.("NFD").replace(new RegExp("\\p{M}","gu"),"")||(t||"").toString().toLowerCase(),T=t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),k=new Map;[...M.sidebarTracks||[],...M.mainTracks||[]].forEach(t=>{const h=String(t.id??t.file??JSON.stringify(t));k.has(h)||k.set(h,{...t,_key:h})});const _=Array.from(k.values()),g=new Map;let b=[],w=-1,L="";const B=(t,h=220)=>{let y;return(...E)=>{clearTimeout(y),y=setTimeout(()=>t(...E),h)}},O=(t,h)=>{const y=x(h),E=x(t.title),j=x(t.artist);return E===y||j===y?100:E.startsWith(y)?90:j.startsWith(y)?80:E.includes(y)?70:j.includes(y)?60:0},H=(t,h,y)=>{const E=T(y),j=y?new RegExp(`(${E})`,"ig"):null,W=j?t.title.replace(j,'<span class="bg-emerald-600/30 rounded-sm px-[2px]">$1</span>'):t.title,K=j?t.artist.replace(j,'<span class="text-emerald-400">$1</span>'):t.artist;return`
      <div role="option" aria-selected="false" data-search-index="${h}"
  class="search-item group flex items-center gap-3 px-3 py-2 rounded-lg
         hover:bg-gradient-to-r hover:from-neutral-800/70 hover:to-neutral-700/40
         cursor-pointer transition-all duration-200 ease-out
         focus-within:ring-2 focus-within:ring-white/50">

  <div class="relative shrink-0">
    <img loading="lazy" src="${t.cover}" alt="${t.title}"
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


    `},P=(t,h)=>{if(b=t,w=-1,!t||t.length===0){p.innerHTML='<div class="px-4 py-4 text-sm text-neutral-400">No results</div>',p.classList.remove("hidden"),s.setAttribute("aria-expanded","true");return}const y=8,j=`
      <div class="px-2 py-2 text-sm text-neutral-400 font-semibold">Tracks</div>
      ${t.slice(0,y).map((W,K)=>H(W,K,h)).join("")}
      ${t.length>y?`<div class="px-3 py-2 text-sm text-neutral-400 hover:bg-neutral-800 cursor-pointer rounded-b-md" data-see-all>See ${t.length} results</div>`:""}
    `;p.innerHTML=j,p.classList.remove("hidden"),s.setAttribute("aria-expanded","true"),v()},C=()=>{p.classList.add("hidden"),s.setAttribute("aria-expanded","false"),w=-1},z=t=>{if(!t){C();return}const h=t.trim();if(h.length===0){C();return}if(g.has(h)){P(g.get(h),t);return}const y=_.map(E=>({t:E,score:O(E,h)})).filter(E=>E.score>0).sort((E,j)=>j.score-E.score).map(E=>E.t);g.set(h,y),P(y,t)},A=B(z,220),V=t=>{const h=p.querySelector('[aria-selected="true"]');h&&h.setAttribute("aria-selected","false");const y=p.querySelector(`[data-search-index="${t}"]`);y?(y.setAttribute("aria-selected","true"),y.classList.add("bg-neutral-800"),y.scrollIntoView({block:"nearest",behavior:"smooth"}),w=t):w=-1},v=()=>{if(p.querySelectorAll("[data-search-index]").forEach(t=>{t.setAttribute("aria-selected","false"),t.classList.remove("bg-neutral-800")}),w>=0){const t=p.querySelector(`[data-search-index="${w}"]`);t&&(t.setAttribute("aria-selected","true"),t.classList.add("bg-neutral-800"))}},q=t=>{const h=b[t];if(h){if(typeof window.setPlaylist=="function"&&typeof window.playTrack=="function")try{window.setPlaylist(b,!0),window.playTrack(t)}catch{U([h])}else U([h]);s.value="",d.classList.add("opacity-0","pointer-events-none"),C()}};p.addEventListener("click",t=>{if(t.target.closest("[data-see-all]")){s.value=L,z(L);return}const y=t.target.closest("[data-search-index]");if(!y)return;const E=Number(y.getAttribute("data-search-index"));q(E)}),s.addEventListener("input",t=>{const h=t.target.value;L=h,h.trim().length?(d.classList.remove("opacity-0","pointer-events-none"),A(h)):(d.classList.add("opacity-0","pointer-events-none"),C())}),s.addEventListener("keydown",t=>{if(p.classList.contains("hidden")){t.key==="ArrowDown"&&(L.trim().length&&A(L),t.preventDefault());return}const h=p.querySelectorAll("[data-search-index]");if(t.key==="ArrowDown"){if(t.preventDefault(),h.length===0)return;w=Math.min(h.length-1,w+1),V(w)}else if(t.key==="ArrowUp"){if(t.preventDefault(),h.length===0)return;w=Math.max(0,w-1),V(w)}else if(t.key==="Enter")if(t.preventDefault(),w>=0)q(w);else{const y=p.querySelector("[data-search-index]");y&&q(Number(y.getAttribute("data-search-index")))}else t.key==="Escape"&&(C(),s.blur())}),d.addEventListener("click",()=>{s.value="",d.classList.add("opacity-0","pointer-events-none"),C(),s.blur()}),document.addEventListener("click",t=>{S.contains(t.target)||C()}),document.addEventListener("keydown",t=>{t.key==="k"&&(t.ctrlKey||t.metaKey)&&(t.preventDefault(),s.focus(),s.select())});const D=document.getElementById("avatarBtn"),I=document.getElementById("avatarMenu");D.addEventListener("click",()=>{const t=I.classList.contains("opacity-100");I.classList.toggle("opacity-100",!t),I.classList.toggle("scale-100",!t),I.classList.toggle("opacity-0",t),I.classList.toggle("scale-95",t),I.classList.toggle("pointer-events-auto",!t),I.classList.toggle("pointer-events-none",t)}),document.addEventListener("click",t=>{!D.contains(t.target)&&!I.contains(t.target)&&(I.classList.add("opacity-0","scale-95","pointer-events-none"),I.classList.remove("opacity-100","scale-100","pointer-events-auto"))})}function ne(){const r=document.querySelector("#playlists");if(!r)return;const c=[...M.sidebarTracks].sort(()=>.5-Math.random()).slice(0,6);r.className="home-center  h-full rounded-xl flex flex-col overflow-hidden min-h-0",r.innerHTML=`
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
  `;const i=r.querySelector("#top-tracks");c.forEach((a,l)=>{const n=document.createElement("div");n.className=`
  group relative flex items-center gap-4 
  bg-white/5 rounded-2xl p-3 cursor-pointer
  hover:bg-white/10 transition-all duration-300
`,n.innerHTML=`
  <div class="">
    <div class="w-[70px] h-[70px] rounded-xl   overflow-hidden shadow-md ">
      <img 
        src="${a.cover}" 
        alt="${a.title}" 
        class="w-full h-full object-cover 
               transition-transform duration-700"
      />
    </div>
    <button class="absolute inset-0 flex items-center justify-center 
                   text-white opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300">
      
    </button>
    <button class="absolute bottom-6 z-20 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>

  <div class="flex flex-col overflow-hidden min-w-0">
    <span class="text-white font-bold truncate text-sm md:text-lg">
      ${a.title}
    </span>
    <span class="text-gray-400 text-xs md:text-sm truncate">
      ${a.artist}
    </span>
  </div>
`,n.addEventListener("click",()=>{N(a.id,{playlist:c,index:l,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(c,!1),typeof window.playTrack=="function"&&window.playTrack(l)}),i.appendChild(n)});const e=r.querySelector("#main-tracks");M.mainTracks.forEach((a,l)=>{const n=document.createElement("div");n.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",n.classList.add("fade-in"),n.style.animationDelay=`${l*.05}s`,n.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${a.cover}" alt="${a.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 z-20 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${a.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${a.artist}</span>
  </div>
`,n.addEventListener("click",()=>{N(a.id,{playlist:M.mainTracks,index:l,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.mainTracks,!1),typeof window.playTrack=="function"&&window.playTrack(l)}),e.appendChild(n)});const o=document.createElement("div");o.className="mt-12",o.innerHTML=`
  <div class="flex mb-8 items-center">
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Top Tracks</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`,r.querySelector(".convert .flex-1").appendChild(o);const f=o.querySelector("#top-tracks-grid");M.topTracks.forEach((a,l)=>{const n=document.createElement("div");n.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",n.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${a.cover}" alt="${a.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${a.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${a.artist}</span>
  </div>
  
`,n.addEventListener("click",()=>{N(a.id,{playlist:M.topTracks,index:l,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.topTracks,!1),typeof window.playTrack=="function"&&window.playTrack(l)}),f.appendChild(n)});const m=document.createElement("div");m.className="mt-12",m.innerHTML=`
  <div class="flex mb-8 items-center">
    <h3 class="text-3xl md:text-5xl font-extrabold spotify-title bg-clip-text text-transparent tracking-tight">Listen Today</h3>
  </div>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6" id="top-tracks-grid"></div>
`,r.querySelector(".convert .flex-1").appendChild(m);const u=m.querySelector("#top-tracks-grid");M.listenToday.forEach((a,l)=>{const n=document.createElement("div");n.className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] before:absolute before:inset-0 before:rounded-2xl before:p-[2px] before:bg-gradient-to-br before:from-[#1DB954] before:to-[#191414] before:opacity-0 hover:before:opacity-100 before:transition-opacity",n.innerHTML=`
  <div class="relative rounded-2xl overflow-hidden">
    <img src="${a.cover}" alt="${a.title}" 
      class="w-full h-[150px] md:h-[210px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" />
    <button class="absolute bottom-3 right-3 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" class="w-6 h-6">
        <path d="M5 3v18l15-9-15-9z"/>
      </svg>
    </button>
  </div>
  <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    <span class="text-white font-bold block truncate text-sm md:text-base">${a.title}</span>
    <span class="text-gray-300 text-xs md:text-sm block truncate">${a.artist}</span>
  </div>
  
`,n.addEventListener("click",()=>{N(a.id,{playlist:M.listenToday,index:l,autoplay:!1}),typeof window.setPlaylist=="function"&&window.setPlaylist(M.listenToday,!1),typeof window.playTrack=="function"&&window.playTrack(l)}),u.appendChild(n)})}document.addEventListener("DOMContentLoaded",()=>{se(),U(),re(),ne();const r=document.getElementById("library-buttons");r&&ae(r),document.querySelectorAll(".playlist-item").forEach(s=>{s.addEventListener("mouseenter",()=>s.classList.add("active")),s.addEventListener("mouseleave",()=>s.classList.remove("active")),s.addEventListener("touchstart",()=>s.classList.add("active")),s.addEventListener("touchend",()=>s.classList.remove("active"))});const i=document.querySelectorAll("#main-nav .nav-link");i.forEach(s=>{s.addEventListener("click",d=>{d.preventDefault(),i.forEach(p=>p.classList.remove("active")),s.classList.add("active")})});const e=document.getElementById("search-input"),o=document.getElementById("search-dropdown"),f=document.getElementById("clear-btn"),m=document.getElementById("mobile-search-overlay");e&&o&&f&&(e.addEventListener("focus",()=>{window.innerWidth<768&&m?(m.classList.remove("hidden"),m.querySelector("input")?.focus()):o.classList.remove("hidden")}),e.addEventListener("input",()=>{e.value.trim()!==""?f.classList.remove("opacity-0","pointer-events-none"):f.classList.add("opacity-0","pointer-events-none")}),f.addEventListener("click",()=>{e.value="",f.classList.add("opacity-0","pointer-events-none"),e.focus()}),document.addEventListener("click",s=>{s.target.closest("#search-container")||o.classList.add("hidden")})),m&&m.querySelector(".close-search")?.addEventListener("click",()=>{m.classList.add("hidden")});const u=document.getElementById("burger-btn"),a=document.getElementById("offcanvas-sidebar"),l=document.getElementById("offcanvas-close");u&&a&&u.addEventListener("click",()=>{a.classList.toggle("translate-x-0"),a.classList.toggle("translate-x-[-100%]"),a.classList.toggle("opacity-100"),a.classList.toggle("opacity-0")}),l&&a&&l.addEventListener("click",()=>{a.classList.add("translate-x-[-100%]","opacity-0")});const n=document.querySelectorAll(".filter-btn");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(d=>d.classList.remove("active-btn")),s.classList.add("active-btn")})}),window.addEventListener("resize",()=>{const s=document.getElementById("offcanvas-sidebar");s&&window.innerWidth>=768&&s.classList.add("translate-x-[-100%]","opacity-0");const d=document.getElementById("mobile-search-overlay");d&&window.innerWidth>=768&&d.classList.add("hidden")})});
