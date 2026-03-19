import{a as d,S as m,i}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="55034566-ab7afa6b701fa9ca43cfdd5cc",g="https://pixabay.com/api/";function h(s){return d.get(g,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector('input[name="search-text"]'),b=new m(".gallery a",{captionsData:"alt",captionDelay:250,nav:!0,keyboard:!0});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:p})=>`<li class="gallery-item">
            <a href="${a}">
                <img class="gallery-image"
                    src="${o}"
                    alt="${e}">
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${t}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${n}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${f}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${p}</span>
                </p>
            </div>
        </li>`).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML="",c&&(c.value="")}function v(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.error({message:"Search field cannot be empty",position:"topRight"});return}S(),v(),h(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{console.log(o),i.error({message:"Something went wrong"})}).finally(()=>{q()})});
//# sourceMappingURL=index.js.map
