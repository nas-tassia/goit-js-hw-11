import{i as n,S as c}from"./assets/vendor-De63neY_.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=t=>`
    <li class="gallery_card">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery_img" src="${t.webformatURL}" alt="${t.tags}"/>
        </a>
        <div class="img_info">
                <div class="info-item">
                    <p class="label">Likes</p>
                    <p class="value">${t.likes}</p>
                </div>
                <div class="info-item">
                    <p class="label">Views</p>
                    <p class="value">${t.views}</p>
                </div>
                <div class="info-item">
                    <p class="label">Comments</p>
                    <p class="value">${t.comments}</p>
                </div>
                <div class="info-item">
                    <p class="label">Downloads</p>
                    <p class="value">${t.downloads}</p>
                </div>
        </div>
    </li>
    `,u=t=>fetch(`https://pixabay.com/api/?key=49376861-d933ee90ccf66fe84851db78b&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s)throw new Error(s.status);return s.json()}),a={form:document.querySelector("form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p=()=>{a.loader.style.display="block"},f=()=>{a.loader.style.display="none"},m=t=>{t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s===""){n.warning({title:"Warning",message:"Input must contain letters!",position:"topRight"});return}p(),u(s).then(({hits:o})=>{if(o.length===0){n.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),a.form.reset(),a.gallery.innerHTML="";return}const l=o.map(r=>d(r)).join("");a.gallery.innerHTML=l,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)}).finally(()=>{f()})};a.form.addEventListener("submit",m);
//# sourceMappingURL=index.js.map
