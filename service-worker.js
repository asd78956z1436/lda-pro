if(!self.define){let i,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=e,document.head.appendChild(i)}else i=l,importScripts(l),e()})).then((()=>{let i=e[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(n,r)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let s={};const u=i=>l(i,o),f={module:{uri:o},exports:s,require:u};e[o]=Promise.all(n.map((i=>f[i]||u(i)))).then((i=>(r(...i),s)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"lda-pro"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/814.c0bc1ef7.css",revision:null},{url:"/css/app.0d5f5e9b.css",revision:null},{url:"/css/chunk-vendors.9d8fc639.css",revision:null},{url:"/fonts/Inter-italic.var.958a0b97.woff2",revision:null},{url:"/fonts/Inter-roman.var.b2129c00.woff2",revision:null},{url:"/fonts/primeicons.0112589c.ttf",revision:null},{url:"/fonts/primeicons.ba3f916d.woff2",revision:null},{url:"/fonts/primeicons.f8b9e8a4.woff",revision:null},{url:"/fonts/primeicons.ffecb254.eot",revision:null},{url:"/img/flags_responsive.2aca9e17.png",revision:null},{url:"/img/loading.99fd1e91.gif",revision:null},{url:"/img/portfolio1.55542802.jpg",revision:null},{url:"/img/portfolio2.55542802.jpg",revision:null},{url:"/img/portfolio3.55542802.jpg",revision:null},{url:"/img/portfolio4.55542802.jpg",revision:null},{url:"/img/portfolio5.55542802.jpg",revision:null},{url:"/img/primeicons.943ab24c.svg",revision:null},{url:"/index.html",revision:"b81a62020b9a8e8296166994536ef426"},{url:"/js/814.690563ea.js",revision:null},{url:"/js/app.e9329c58.js",revision:null},{url:"/js/chunk-vendors.3b3557e0.js",revision:null},{url:"/manifest.json",revision:"f1a76e886bb9fe26347dc836651b3adf"},{url:"/media/video3.88401918.mp4",revision:null},{url:"/media/video4.8d99af30.mp4",revision:null},{url:"/media/video5.6fabdbd2.mp4",revision:null},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map