const d=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}};d();const i=document.getElementById("app");let c=document.getElementById("input-field"),o=document.getElementById("residue");const t=document.getElementById("input-area");t.value="";o.innerHTML=`Welcome visitor<br>
                      type 'help' for commands<br>`;const p=`[visitor@mo-shaz~]$ help<br>
              <p class="help">
              help: show this help menu<br>
              about: details about the developer<br>
              projects: projects by the developer<br>
              cat [project-name]: for project details<br>
              clear: clear the screen<br></p>`,m=`[visitor@mo-shaz~]$ about<br>
               <p class="about">
               Mohammed Shaz<br>
               FullStack Developer<br>
               Kerala, India<br>
               <a class="git" href="https://github.com/mo-shaz">Github</a>
               <a class="wapp" href="https://wa.me/+919995982023">WhatsApp</a>
               <a class="linked" href="https://www.linkedin.com/in/mohammed-s-6a834191">LinkedIn</a><br></p>`,b=`[visitor@mo-shaz~]$ projects<br>
                  <p class="projects">
                  artbucket<br></p>`,h=`[visitor@mo-shaz~]$ cat artbucket<br>
                   <p class="artbucket">
                   <u>artbucket</u><br>
                   Full-stack Web Project (JAMStack)<br>
                   Frontend: Svelte<br>
                   Backend: NodeJS + Fastify + Postgres<br>
                   Links: <a href="https://artbucket-site.pages.dev">site</a> <a href="https://github.com/mo-shaz/artbucket.site">repo</a><br></p>`,f=`[visitor@mo-shaz~]$<br>
               <p class="error">
               <b>error:</b> invalid command<br></p>`;window.setInterval(()=>{document.activeElement===t?document.getElementById("cursor").style.animation="blink 1s infinite step-end":document.getElementById("cursor").style.animation=""},500);i.addEventListener("click",()=>{t.focus()});t.addEventListener("input",()=>{c.innerHTML=t.value});t.addEventListener("keyup",a=>{a.key==="Enter"&&(t.value=="help"?o.innerHTML+=p:t.value==""?o.innerHTML+="[visitor@mo-shaz~]$<br>":t.value=="about"?o.innerHTML+=m:t.value=="projects"?o.innerHTML+=b:t.value=="cat artbucket"?o.innerHTML+=h:t.value=="clear"?o.innerHTML="":o.innerHTML+=f,i.scrollTop=i.scrollHeight,t.value="",c.innerHTML="")});
