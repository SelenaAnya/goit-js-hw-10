import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                         */import{f as x,i as p}from"./assets/vendor-BbbuE1sJ.js";const c=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),h=document.querySelector("[data-seconds]");let y=null,d=null;x(c,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){y=e[0],y<new Date?(p.error({title:"Помилка",message:"Будь ласка, оберіть дату в майбутньому",position:"topRight"}),m(n)):k(n)}});function m(e){e&&(e.disabled=!0,e.style.backgroundColor="#a0a0a0",e.style.cursor="not-allowed")}function k(e){e&&(e.disabled=!1,e.style.backgroundColor="#61dafb",e.style.cursor="pointer")}m(n);function C(){const e=document.querySelector(".timer"),l=document.querySelectorAll(".field"),s=document.querySelectorAll(".value"),a=document.querySelectorAll(".label");e&&(e.style.display="flex",e.style.gap="48px",e.style.justifyContent="center"),l.forEach(t=>{t.style.flexDirection="column",t.style.alignItems="center"}),s.forEach(t=>{t.style.fontSize="48px",t.style.fontWeight="bold",t.style.color="#61dafb"}),a.forEach(t=>{t.style.fontSize="24px",t.style.color="#61dafb"});const i=document.querySelector(".flatpickr-wrapper");i.style.display="flex",i.style.justifyContent="center",i.style.alignItems="center";const o=document.querySelector(".flatpickr-input");o.style.width="300px",o.style.padding="10px",o.style.backgroundColor="#282c34",o.style.color="#ffffff",o.style.borderRadius="8px",o.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)",o.style.fontSize="18px",o.style.textAlign="center",document.querySelectorAll(".flatpickr-selected").forEach(t=>{t.style.backgroundColor="#61dafb",t.style.color="#282c34",t.style.borderRadius="8px",t.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"});const r=document.querySelector(".flatpickr-mobile");r.style.width="500px",r.style.padding="10px",r.style.backgroundColor="#282c34",r.style.color="#ffffff",r.style.borderRadius="8px",r.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)",r.style.fontSize="38px",r.style.textAlign="center",e.style.display="flex",e.style.gap="20px",e.style.justifyContent="center",e.style.alignItems="center",e.style.marginTop="20px",e.style.fontFamily="Arial, sans-serif",e.style.marginTop="60px",l.forEach(t=>{t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.backgroundColor="#282c34",t.style.padding="10px 20px",t.style.borderRadius="8px",t.style.color="#ffffff",t.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"}),s.forEach(t=>{t.style.fontSize="2.5rem",t.style.fontWeight="bold",t.style.color="#61dafb"}),a.forEach(t=>{t.style.fontSize="1rem",t.style.fontWeight="normal",t.style.color="#9b9b9b"}),n.style.backgroundColor="#4E35DE",n.style.border="none",n.style.padding="10px 15px",n.style.borderRadius="8px",n.style.color="#ffffff",n.style.fontSize="48px",n.style.fontWeight="bold"}document.addEventListener("DOMContentLoaded",()=>{C()});function w(){c&&(c.disabled=!0,c.style.cursor="not-allowed")}function q(){c&&(c.disabled=!1,c.style.cursor="pointer")}n.addEventListener("click",()=>{y&&(w(),d&&clearInterval(d),d=setInterval(()=>{const l=y-new Date;if(l<=0){clearInterval(d),d=null,p.info({title:"Час вийшов",message:"Таймер завершено!",position:"topRight"}),u(0,0,0,0),q();return}const{days:s,hours:a,minutes:i,seconds:o}=D(l);u(s,a,i,o)},1e3))});function D(e){const o=Math.floor(e/864e5),f=Math.floor(e%864e5/36e5),r=Math.floor(e%864e5%36e5/6e4),t=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:f,minutes:r,seconds:t}}function u(e,l,s,a){S.textContent=e.toString().padStart(2,"0"),g.textContent=l.toString().padStart(2,"0"),b.textContent=s.toString().padStart(2,"0"),h.textContent=a.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
