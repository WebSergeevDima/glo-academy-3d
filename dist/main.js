(()=>{"use strict";(e=>{const t=document.querySelector("#timer-days"),r=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),c=document.querySelector("#timer-seconds"),n=()=>{const{timeRemaining:e,days:n,hours:s,minutes:u,seconds:i}=(()=>{let e=(new Date("2023 6 08").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),r=Math.floor(e/60%60),o=Math.floor(e/60/60%24);return{timeRemaining:e,days:Math.floor(e/60/60/24%24),hours:o,minutes:r,seconds:t}})();t.textContent=a(n),r.textContent=a(s),o.textContent=a(u),c.textContent=a(i),e<=0&&clearInterval(l)},l=setInterval((()=>{n()}),1e3),a=e=>e<0?"00":s(e),s=e=>e<10?`0${e}`:e;n()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector('main [href="#service-block"]'),r=()=>e.classList.toggle("active-menu");t.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("click",(e=>{if((!e.target.closest("menu")&&document.querySelector("menu.active-menu")||e.target.closest(".menu")||e.target.classList.contains("close-btn"))&&(e.preventDefault(),r()),e.target.matches("a")&&e.target.closest("li")){const t=e.target.getAttribute("href").slice(1);r(),e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let r,o,c=0,n=!1;const l=()=>{if(n)return e.style.display="block",e.style.opacity="1",!1;e.style.opacity="0",e.style.display="block",r=setInterval((()=>{c+=.01,e.style.opacity=c,c>=1&&clearInterval(r)}),10)},a=()=>{n=window.innerWidth<768};a(),t.forEach((e=>e.addEventListener("click",l))),window.addEventListener("resize",a),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.closest(".popup-close")||(()=>{if(n)return e.style.display="none",!1;clearInterval(r),o=setInterval((()=>{c-=.01,e.style.opacity=c,c<.1&&(clearInterval(o),e.style.display="none")}),10)})()}))})(),document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d]/g,"")}))})),(()=>{const e=[document.querySelector('#form1 [type="text"]'),document.querySelector('#form2 [placeholder="Ваше сообщение"]'),document.querySelector('#form2 [type="text"]'),document.querySelector('#form3 [type="text"]')],t=[document.querySelector('#form1 [type="email"]'),document.querySelector('#form2 [type="email"]'),document.querySelector('#form3 [type="email"]')],r=[document.querySelector('#form1 [type="tel"]'),document.querySelector('#form2 [type="tel"]'),document.querySelector('#form3 [type="tel"]')];e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я- ]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9a-zA-Z@\-_.!~*']/g,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/g,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})()})();