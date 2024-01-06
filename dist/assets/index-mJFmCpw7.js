(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l="/images/light_mode.svg",c="/images/dark_mode.svg";document.querySelector("#app").innerHTML=`
  <div>

    <div class="dark-mode-buttons">
      <button class="dark-mode-button" id="dark-mode-on"><img src="${c}" width="24" height="24" alt="Dark mode" aria-label="dark mode toggle" title="Dark mode"></button>
      <button class="dark-mode-button" id="dark-mode-off"><img src="${l}" width="24" height="24" alt="Light mode" aria-label="light mode toggle" title="Light mode"></button>
    </div>
    <svg  class="svg-el" height="100" width="100%">
    <circle cx="50%" cy="50%" r="30" fill="none" />
    </svg> 
    <h2>Hi! My name is Basil.</h2>
    <p style="padding: 1em;">I write code. Developing solutions using Python & Javascript with interests in automation and Web3. </p>
    <p class="read-the-docs">
      Here are some links for you to explore:
    </p>
    <p>See my CV <a id="cv-link" href="https://nftstorage.link/ipfs/bafkreie4tekhykiidmxagz6k4bzviu4ep7nogmlcuwfpti6hmvwp6gi3cq">here</a></p>
    <div id="social">
    <a href="https://www.linkedin.com/in/vasiliyo" target="_blank">Linkedin</a>
    <a href="https://github.com/iupiew" target="_blank">Github</a>
    </div>
    <svg height="35" width="100%" class="svg-el">
  <line x1="25%" y1="10" x2="75%" y2="10" />
  <line x1="35%" y1="20" x2="65%" y2="20" />
  <line x1="45%" y1="30" x2="55%" y2="30" />
</svg>
  </svg>
  
  </div>
`;const o=document.body.classList,n=sessionStorage.getItem("theme");n==="dark"?o.toggle("dark-mode",!0):n==="light"?o.toggle("dark-mode",!1):window.matchMedia("(prefers-color-scheme: dark)").matches&&o.toggle("dark-mode",!0);document.getElementById("dark-mode-on").addEventListener("click",function(s){o.toggle("dark-mode",!0),sessionStorage.setItem("theme","dark")});document.getElementById("dark-mode-off").addEventListener("click",function(s){o.toggle("dark-mode",!1),sessionStorage.setItem("theme","light")});
