import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                         */import{f as x,i as y}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let i=null,c=null;x(s,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=t[0],i<new Date?(y.error({title:"Помилка",message:"Будь ласка, оберіть дату в майбутньому",position:"topRight"}),u(n)):k(n)}});function u(t){t&&(t.disabled=!0,t.style.backgroundColor="#a0a0a0",t.style.cursor="not-allowed")}function k(t){t&&(t.disabled=!1,t.style.backgroundColor="#61dafb",t.style.cursor="pointer")}u(n);function C(){const t=document.querySelector(".timer"),r=document.querySelectorAll(".field"),l=document.querySelectorAll(".value"),a=document.querySelectorAll(".label");t&&(t.style.display="flex",t.style.gap="48px",t.style.justifyContent="center"),r.forEach(e=>{e.style.flexDirection="column",e.style.alignItems="center"});const o=document.querySelector(".flatpickr-mobile");o.style.width="500px",o.style.padding="10px",o.style.backgroundColor="#282c34",o.style.color="#ffffff",o.style.borderRadius="8px",o.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)",o.style.fontSize="38px",o.style.textAlign="center",t.style.display="flex",t.style.gap="20px",t.style.justifyContent="center",t.style.alignItems="center",t.style.marginTop="20px",t.style.fontFamily="Arial, sans-serif",t.style.marginTop="60px",r.forEach(e=>{e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.backgroundColor="#282c34",e.style.padding="10px 20px",e.style.borderRadius="8px",e.style.color="#ffffff",e.style.boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"}),l.forEach(e=>{e.style.fontSize="2.5rem",e.style.fontWeight="bold",e.style.color="#61dafb"}),a.forEach(e=>{e.style.fontSize="1rem",e.style.fontWeight="normal",e.style.color="#9b9b9b"}),n.style.backgroundColor="#4E35DE",n.style.border="none",n.style.padding="10px 15px",n.style.borderRadius="8px",n.style.color="#ffffff",n.style.fontSize="48px",n.style.fontWeight="bold"}C();function D(){s&&(s.disabled=!0,s.style.cursor="not-allowed")}function q(){s&&(s.disabled=!1,s.style.cursor="pointer")}n.addEventListener("click",()=>{i&&(D(),c&&clearInterval(c),c=setInterval(()=>{const r=i-new Date;if(r<=0){clearInterval(c),c=null,y.info({title:"Час вийшов",message:"Таймер завершено!",position:"topRight"}),d(0,0,0,0),q();return}const{days:l,hours:a,minutes:o,seconds:e}=w(r);d(l,a,o,e)},1e3))});function w(t){const e=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:f,minutes:p,seconds:m}}function d(t,r,l,a){S.textContent=t.toString().padStart(2,"0"),g.textContent=r.toString().padStart(2,"0"),h.textContent=l.toString().padStart(2,"0"),b.textContent=a.toString().padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
