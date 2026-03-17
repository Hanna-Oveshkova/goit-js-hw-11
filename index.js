import{a as p,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="55034566-ab7afa6b701fa9ca43cfdd5cc",d="https://pixabay.com/api/";async function m(s){return(await p.get(d,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:c,downloads:l})=>`<li class="gallery-item">
            <a href="${n}">
                <img class="gallery-image"
                    src="${o}"
                    alt="${e}">
            </a>
            <div class="info-item">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${t}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${a}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${c}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${l}</span>
                </p>
            </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",r),h.innerHTML=""}function L(){g.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.error({message:"Search field cannot be empty",position:"topRight"});return}try{const o=await m(r);if(console.log(o),o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}catch(o){console.log(o)}finally{L()}});
//# sourceMappingURL=index.js.map
