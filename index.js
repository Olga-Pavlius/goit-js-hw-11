import{S as p,i}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="48293638-4d2a22c69cd32ab6d85c7a697",h="https://pixabay.com/api/";async function b(s,r=1,o=40){const a=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}),e=await fetch(`${h}?${a}`);if(!e.ok)throw new Error("Failed to fetch images");return e.json()}let c;function L(s){const r=document.getElementById("gallery"),o=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:m,comments:f,downloads:g})=>`
        <a href="${e}" class="gallery-item">
          <img src="${a}" alt="${t}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${n}</p>
            <p><b>Views:</b> ${m}</p>
            <p><b>Comments:</b> ${f}</p>
            <p><b>Downloads:</b> ${g}</p>
          </div>
        </a>
      `).join("");r.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new p(".gallery a")}function E(){document.getElementById("gallery").innerHTML=""}function l(s){document.getElementById("loader").classList.toggle("hidden",!s)}const $=document.getElementById("search-form");let u=1,d="";$.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements.query.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search term."});return}d=r,u=1,E(),l(!0);try{const{hits:o,totalHits:a}=await b(d,u);if(l(!1),o.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(o),i.success({title:"Success",message:`Hooray! We found ${a} images.`})}catch(o){l(!1),i.error({title:"Error",message:o.message})}});
//# sourceMappingURL=index.js.map
