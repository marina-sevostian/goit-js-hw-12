import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function f(s){return fetch(`https://pixabay.com/api/?key=46729875-7729b8e358007a47de817f6d1&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok){if(r.status===404)return[];throw new Error(r.status)}return r.json()}).catch(r=>{loader.classList.replace("loader","hide"),l.error({title:"Error",message:"Error! Sorry, something went wrong. This is an error!",color:"#ef4040",close:!1})})}let d=document.querySelector(".gallery");function m(s){const r=s.map(t=>`<div class="photo">
   <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="info">
  <p class="info-item">Likes <span class="info-item-num">${t.likes}</span></p>
  <p class="info-item">Views <span class="info-item-num">${t.views}</span></p>
  <p class="info-item">Comments <span class="info-item-num">${t.comments}</span></p>
  <p class="info-item">Downloads <span class="info-item-num">${t.downloads}</span></p>
  </div>
     </div> `).join("");d.insertAdjacentHTML("beforeend",r)}let p=document.querySelector(".gallery");document.querySelector(".search-form-btn");let c=document.querySelector(".search-form"),h=document.querySelector(".search-form-input"),g=new u(".gallery a"),a=document.querySelector(".loader");a.classList.replace("loader","hide");c.addEventListener("submit",s=>{s.preventDefault();const r=h.value.trim();y(),a.classList.replace("hide","loader"),r!==""?(f(r).then(t=>{t.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"#ef4040",close:!1}),m(t.hits),g.refresh(),a.classList.replace("loader","hide")}).catch(t=>{a.classList.replace("loader","hide"),l.error({title:"Error",message:"Error! Sorry, something went wrong. This is an error!",color:"#ef4040",close:!1})}),c.reset()):(a.classList.replace("loader","hide"),l.warning({title:"Caution",message:"You forgot important data! Enter something!",color:"#ffa000",close:!1}))});new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(){p.innerHTML=""}
//# sourceMappingURL=index.js.map
