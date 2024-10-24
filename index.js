import{i,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="46667288-b1e46ab2736dc8061385815e5",m="https://pixabay.com/api/";async function u(a){const s=new URLSearchParams({key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=await fetch(`${m}?${s}`);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}function f(a){const s=document.getElementById("gallery");if(s.innerHTML="",a.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}a.forEach(e=>{const n=document.createElement("div");n.classList.add("gallery-item"),n.innerHTML=`
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    src="${e.webformatURL}"
                    alt="${e.tags}"
                    style="width: 360px; height: 152px; object-fit: cover;"
                />
                <ul class="image-description">
                    <li class="image-descr-item"><span class="descr-name">Likes</span>${e.likes}</li>
                    <li class="image-descr-item"><span class="descr-name">Views</span>${e.views}</li>
                    <li class="image-descr-item"><span class="descr-name">Comments</span>${e.comments}</li>
                    <li class="image-descr-item"><span class="descr-name">Downloads</span>${e.downloads}</li>
                </ul>
            </a>
        `,s.appendChild(n)})}function p(){i.warning({message:"Please enter a search query!",position:"topRight"})}let h=new l(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const g=document.getElementById("search-form"),y=document.getElementById("search-input"),c=document.getElementById("loader");function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}g.addEventListener("submit",async a=>{a.preventDefault();const s=y.value.trim();if(s===""){p();return}try{L();const e=await u(s);f(e),h.refresh()}catch{iziToast.error({message:"Failed to fetch images. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
