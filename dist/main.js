(()=>{"use strict";(e=>{const t=document.querySelector("#timer-days"),r=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),l=document.querySelector("#timer-seconds"),c=()=>{const{timeRemaining:e,days:c,hours:s,minutes:i,seconds:u}=(()=>{let e=(new Date("2023 6 08").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),r=Math.floor(e/60%60),o=Math.floor(e/60/60%24);return{timeRemaining:e,days:Math.floor(e/60/60/24%24),hours:o,minutes:r,seconds:t}})();t.textContent=n(c),r.textContent=n(s),o.textContent=n(i),l.textContent=n(u),e<=0&&clearInterval(a)},a=setInterval((()=>{c()}),1e3),n=e=>e<0?"00":s(e),s=e=>e<10?`0${e}`:e;c()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector('main [href="#service-block"]'),r=()=>e.classList.toggle("active-menu");t.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href").slice(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("click",(e=>{if((!e.target.closest("menu")&&document.querySelector("menu.active-menu")||e.target.closest(".menu")||e.target.classList.contains("close-btn"))&&(e.preventDefault(),r()),e.target.matches("a")&&e.target.closest("li")){const t=e.target.getAttribute("href").slice(1);r(),e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn");let r,o,l=0,c=!1;const a=()=>{if(c)return e.style.display="block",e.style.opacity="1",!1;e.style.opacity="0",e.style.display="block",r=setInterval((()=>{l+=.01,e.style.opacity=l,l>=1&&clearInterval(r)}),10)},n=()=>{c=window.innerWidth<768};n(),t.forEach((e=>e.addEventListener("click",a))),window.addEventListener("resize",n),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.closest(".popup-close")||(()=>{if(c)return e.style.display="none",!1;clearInterval(r),o=setInterval((()=>{l-=.01,e.style.opacity=l,l<.1&&(clearInterval(o),e.style.display="none")}),10)})()}))})(),document.querySelectorAll("input.calc-item").forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d]/g,"")}))})),(()=>{const e=[document.querySelector('#form1 [type="text"]'),document.querySelector('#form2 [placeholder="Ваше сообщение"]'),document.querySelector('#form2 [type="text"]'),document.querySelector('#form3 [type="text"]')],t=[document.querySelector('#form1 [type="email"]'),document.querySelector('#form2 [type="email"]'),document.querySelector('#form3 [type="email"]')];e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я- ]/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9a-zA-Z@\-_.!~*']/g,"")}))})),((e,t="+7 (___) ___-__-__")=>{const r=document.querySelectorAll(e),o=e=>{const{keyCode:r,target:o}=e,l=t,c=l.replace(/\D/g,""),a=o.value.replace(/\D/g,"");let n=0,s=l.replace(/[_\d]/g,(e=>n<a.length?a.charAt(n++)||c.charAt(n):e));n=s.indexOf("_"),-1!==n&&(s=s.slice(0,n));let i=l.substr(0,o.value.length).replace(/_+/g,(({length:e})=>`\\d{1,${e}}`)).replace(/[+()]/g,"\\$&");i=new RegExp(`^${i}$`),(!i.test(o.value)||o.value.length<5||r>47&&r<58)&&(o.value=s),"blur"==e.type&&o.value.length<5&&(o.value="")};for(const e of r)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)})('#form1 [type="tel"], #form2 [type="tel"], #form3 [type="tel"]')})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),r=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),r[t].classList.remove("d-none")):(e.classList.remove("active"),r[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),r=document.querySelector(".portfolio-dots");let o;let l,c=0;const a=(e,t,r)=>{e[t].classList.remove(r)},n=(e,t,r)=>{e[t].classList.add(r)},s=()=>{a(t,c,"portfolio-item-active"),a(o,c,"dot-active"),c++,c>=t.length&&(c=0),n(t,c,"portfolio-item-active"),n(o,c,"dot-active")},i=()=>{l=setInterval(s,3e3)};(()=>{let e="";t.forEach(((t,r)=>{e+=`<li class="dot${0===r?" dot-active":""}"></li>`})),r.innerHTML=e,o=r.querySelectorAll(".dot")})(),i(),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,c,"portfolio-item-active"),a(o,c,"dot-active"),e.target.matches("#arrow-right")&&c++,e.target.matches("#arrow-left")&&c--,e.target.classList.contains("dot")&&o.forEach(((t,r)=>{e.target===t&&(c=r)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),n(t,c,"portfolio-item-active"),n(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i()}),!0)})()})();