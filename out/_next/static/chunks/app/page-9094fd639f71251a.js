(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{7483:function(e,t,a){Promise.resolve().then(a.bind(a,3794)),Promise.resolve().then(a.bind(a,8495)),Promise.resolve().then(a.bind(a,1185)),Promise.resolve().then(a.bind(a,4201)),Promise.resolve().then(a.bind(a,8729)),Promise.resolve().then(a.bind(a,8167)),Promise.resolve().then(a.bind(a,4231)),Promise.resolve().then(a.bind(a,7238)),Promise.resolve().then(a.bind(a,4483))},4653:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var i=a(7437),n=a(6648);function r(e){let{imageSource:t,alt:a,width:r,height:l}=e;return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"w-full h-[250px] bg-white overflow-hidden flex rounded-2xl cursor-pointer",children:(0,i.jsx)(n.default,{src:t,alt:a,width:r,height:l,loading:"lazy",className:"w-full h-full flex object-cover"})})})}},3794:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),n=a(8851),r=a(4653),l=a(6708),s=a(2265);function o(){(0,n.s)();let[e,t]=(0,s.useState)(null),a=e=>{t(e)},o=e?l.zH.filter(t=>"Olahraga"===e&&"Olahraga"===t.category||"Seni dan Kreativitas"===e&&"Seni"===t.category||"Formasi dan Aktivitas"===e&&"Aktivitas"===t.category):l.zH;return(0,i.jsx)("section",{id:"ekstrakulikuler","data-aos":"fade-up",children:(0,i.jsxs)("div",{className:"w-full flex flex-col my-10",children:[(0,i.jsx)("h1",{className:"text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3",children:"program ekstra kulikuler"}),(0,i.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,i.jsxs)("div",{className:"text-white text-2xl my-5 flex gap-3",children:[(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Olahraga"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Olahraga"),children:"Olahraga"}),(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Seni dan Kreativitas"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Seni dan Kreativitas"),children:"Seni dan Kreativitas"}),(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Formasi dan Aktivitas"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Formasi dan Aktivitas"),children:"Formasi dan Aktivitas"})]}),(0,i.jsx)("div",{className:"grid lg:grid-cols-6 grid-cols-1 gap-5",children:o.map(e=>(0,i.jsx)(r.Z,{imageSource:e.name,alt:"example"},e))})]})]})})}},8495:function(e,t,a){"use strict";a.d(t,{default:function(){return v}});var i=a(7437),n=a(1942),r=a(7692);function l(e){let{date:t,monthAndYear:a,title:n,description:r,isHoliday:l,key:s}=e;return(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsxs)("div",{className:"flex items-center gap-3",children:[(0,i.jsxs)("div",{className:"bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center",children:[(0,i.jsx)("h1",{className:"flex justify-center items-center font-bold text-2xl text-white",children:t}),(0,i.jsx)("p",{className:"text-[12px] text-white",children:a})]}),(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:n}),(0,i.jsx)("p",{className:"font-semibold lg:text-sm text-[12px] ".concat(l?"text-red-600":"text-blue-600"),dangerouslySetInnerHTML:{__html:r}})]})]})},s)}var s=a(7138),o={src:"/_next/static/media/icons-facebook.d0b0206c.svg",height:48,width:48,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/icons-youtube.301a7f20.svg",height:48,width:48,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/icons-tiktok.236398de.svg",height:48,width:48,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/icons-instagram.21058950.svg",height:48,width:48,blurWidth:0,blurHeight:0},f=a(6648),m=a(2265),A=a(7395),x=a(1929);let h="https://www.facebook.com/smpnegeri1dobo?mibextid=ZbWKwL",g="https://youtube.com/@smpnegeri1dobo?si=JO8Nnx-7ih-v4SP4",b="https://www.tiktok.com/@spensa_dobo?_t=8mMPh0kaQVT&_r=1",p="https://www.instagram.com/smpnegeri1dobo?igsh=bTVyaWVvbnA3MHpt";function v(){let[e,t]=(0,m.useState)([]),[a,v]=(0,m.useState)(!1),[w,j]=(0,m.useState)([]),[y,k]=(0,m.useState)(!1),N=async()=>{try{v(!0);let e=await fetch("/api/informasi-sekolah"),a=await e.json();e&&t(a.response.data),v(!1)}catch(e){console.log("Error fetching data:",e),v(!1)}},B=async()=>{try{k(!0);let e=await fetch("https://admin.smpnegeri1dobo.sch.id/api/get-posts?search=test&limit=2"),t=await (null==e?void 0:e.json());t&&j(t.data),k(!1)}catch(e){console.log("Error fetching data:",e),k(!1)}};return(0,m.useEffect)(()=>{N(),B()},[]),(0,i.jsxs)("div",{className:"mt-20 bg-white flex flex-col lg:gap-10 gap-5 lg:p-10 p-3",children:[(0,i.jsxs)("div",{className:"flex lg:flex-row flex-col gap-5",children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)("iframe",{title:"peta smp negeri 1 dobo",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.656485086666!2d134.22685327477757!3d-5.762476356900616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2d9092d7c5e2ed%3A0xc50a6a748f9dee0d!2sSMPN%201%20DOBO%20PP%20Aru!5e0!3m2!1sid!2sid!4v1715844689532!5m2!1sid!2sid",className:"lg:w-[600px] w-full",loading:"lazy"})}),a?(0,i.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,i.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,i.jsxs)("div",{className:"flex flex-col gap-8 w-full",children:[(0,i.jsx)("h3",{className:"font-semibold text-xl text-gray-700",children:"Informasi Sekolah"}),(0,i.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,i.jsx)("h3",{className:"font-semibold lg:text-lg text-sm text-gray-600",children:null==e?void 0:e.name}),(0,i.jsxs)("div",{className:"flex items-start gap-3",children:[(0,i.jsx)("div",{className:"flex justify-center items-center",children:(0,i.jsx)(n.LL$,{className:"text-xl"})}),(0,i.jsxs)("h3",{className:"font-semibold lg:text-base text-sm",children:["NSPN: ",(0,i.jsx)("span",{children:null==e?void 0:e.nspn})]})]}),(0,i.jsxs)("div",{className:"flex items-start gap-3",children:[(0,i.jsx)("div",{className:"flex justify-center items-center",children:(0,i.jsx)(n.Nh4,{className:"text-xl"})}),(0,i.jsx)("h3",{className:"font-semibold lg:text-base text-sm",children:null==e?void 0:e.address})]}),(0,i.jsxs)("div",{className:"flex items-start gap-3",children:[(0,i.jsx)("div",{className:"flex justify-center items-center",children:(0,i.jsx)(r.XqJ,{className:"text-xl"})}),(0,i.jsx)("h3",{className:"font-semibold lg:text-base text-sm text-blue-600",children:null==e?void 0:e.phone})]})]})]},null==e?void 0:e.npsn),(0,i.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,i.jsx)("h3",{className:"font-semibold text-xl text-gray-700 mb-5",children:"Agenda Sekolah"}),y?(0,i.jsx)("div",{className:"flex justify-center items-center w-full",children:(0,i.jsx)("h3",{className:"text-white font-semibold text-2xl",children:"Loading..."})}):(0,i.jsx)(i.Fragment,{children:null==w?void 0:w.map(e=>(0,i.jsx)(l,{date:(0,x.fk)(null==e?void 0:e.published_at),monthAndYear:(0,x.mQ)(null==e?void 0:e.published_at),title:null==e?void 0:e.name,description:(0,A.W)(null==e?void 0:e.content,30)},null==e?void 0:e.id))})]})]}),(0,i.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between items-center lg:text-lg text-sm",children:[(0,i.jsxs)("h3",{children:["SMP Negeri 1 DOBO - Interchange 2.1 | ",new Date().getFullYear()]}),(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[(0,i.jsx)(s.default,{href:h,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,i.jsx)(f.default,{src:o,width:40,height:40,alt:"icons-facebook"})})}),(0,i.jsx)(s.default,{href:g,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)("a",{href:g,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,i.jsx)(f.default,{src:c,width:40,height:40,alt:"icons-facebook"})})}),(0,i.jsx)(s.default,{href:b,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,i.jsx)(f.default,{src:d,width:40,height:40,alt:"icons-tiktok"})})}),(0,i.jsx)(s.default,{href:p,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"p-2 bg-white hover:bg-blue-200 transition-all",children:(0,i.jsx)(f.default,{src:u,width:40,height:40,alt:"icons-instagram"})})})]})]})]})}},1185:function(e,t,a){"use strict";a.d(t,{default:function(){return c}});var i=a(7437),n=a(6648),r=a(6903),l=a(6726),s=a(8538),o=a(8851);function c(e){let{showAddressLabel:t}=e;return(0,o.s)(),(0,i.jsxs)("div",{className:"w-full h-screen relative","data-aos":"fade-up",children:[(0,i.jsxs)("div",{className:"flex md:flex-row flex-col justify-between",children:[(0,i.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,i.jsx)("div",{className:"lg:w-[200px] flex justify-center items-center absolute lg:top-0 top-10 right-0 lg:mt-[300px] mt-[80px] mr-[10%] rounded-full",children:(0,i.jsx)(n.default,{src:s.Z,width:1e3,height:1e3,alt:"logo"})})}),(0,i.jsx)("div",{className:"min-w-[750px] h-[600px] lg:p-4 p-0 absolute ".concat(t?"bottom-20":"bottom-0"," lg:left-10 -left-10 mb-5"),children:(0,i.jsx)(n.default,{src:l.default,fill:!0,style:{objectFit:"cover"},alt:"model",priority:!0})})]}),(0,i.jsx)("div",{className:"absolute bottom-0 left-0",children:(0,i.jsx)(r.Z,{showAddressLabel:t})})]})}},4201:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),n=a(8851),r=a(6708),l=a(4653),s=a(6648);function o(){return(0,n.s)(),(0,i.jsxs)("div",{className:"w-full h-full my-10 flex flex-col gap-5","data-aos":"fade-up",children:[(0,i.jsxs)("div",{className:"flex lg:flex-row flex-col gap-3",children:[(0,i.jsx)(s.default,{width:500,height:500,src:r.Kr[8],alt:"mutiara deskripsi"}),(0,i.jsx)("div",{className:"w-full h-full p-4 italic text-white text-3xl",children:"MUTIARA (Mutu, Intelektual & Karakter): Yang mempunyai arti bahwa SMP Negeri 1 Dobo menjadikan Mutu sebagai tujuan utama, dengan sarana Intelektual Guru dan Peserta Didik yang berpedoman kepada Karakter Bangsa dalam mewujudkan Peserta Didik Cerdas dan Kompetitif."})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-5 my-5",children:[(0,i.jsx)("h1",{className:"2xl:text-6xl lg:text-4xl text-center font-semibold text-white",children:"Pengembangan Projek Profil Pelajar Pancasila"}),(0,i.jsx)("div",{className:"grid lg:grid-cols-6 grid-cols-1 gap-3",children:r.Kr.map(e=>(0,i.jsx)(l.Z,{imageSource:e,alt:"example"},e))})]})]})}},8167:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),n=a(8851),r=a(6648),l=a(7138);let s=[{image:{src:"/_next/static/media/kepala_sekolah.7b6770fc.png",height:500,width:332,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEUAAAAMFRd2XlAZHRwMGx4OGh15Y1aEd3KMbWFqXVoLExUQHB2xjHtOOCOGYk8THiBfyP/EAAAACnRSTlMB/m/LVGm58JpPvskBtAAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwlxscNADAIALEDUiFl/20jFL8Mn/YJtDXyR6HYtkrEjUAS7i7+AA6VAMRAWxP2AAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},imageResolution:{width:300,height:300},text:"sambutan kepala sekolah",linkUrl:"/sambutan-kepala-sekolah"},{image:{src:"/_next/static/media/visi_misi.1b907201.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAATNNnAAAARim0//35zAA7Qnn9wv/VXnZ0YtJTdV3R///////0MLb//////tcABR6Us/+wRwAAAACo26EAAABWUDggXgAAADACAJ0BKggACAACQDgliAJ0fwPYYBaSqkxgAP7RLgrNkaufPcAPmUSco5HiR9Xxmf7jphFAEK1x3TGYIee+uQ1SMComei5/+1UU/jlMvgbRtnfoIg7blM71C7sAAAA=",blurWidth:8,blurHeight:8},imageResolution:{width:400,height:300},text:"visi misi",linkUrl:"/visi-misi"},{image:{src:"/_next/static/media/tentang_kami.aeb1f982.webp",height:500,width:500,blurDataURL:"data:image/webp;base64,UklGRtQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAVjZQeAAAAALiUqtIAAAAA4EsT/wkAAACr8MzYAAAAADr+/14AAAKq9f//9asCB/3//////QgAO4ilpYg7AABWUDggbAAAAFACAJ0BKggACAACQDglsAJ0ugEmAAg1xx84AAD2Qge8e7bY7BuYfI/ZE+zuhspM5tjiFI43f7R/9LTzPy6LSa5aB28ejAGCQLcA/fZ++vXMkFa+MUluVS2fW5Aae8ZJeH6RblM/pLHOuIAAAA==",blurWidth:8,blurHeight:8},imageResolution:{width:400,height:300},text:"Tentang Kami",linkUrl:"/tentang-kami"}];function o(){return(0,n.s)(),(0,i.jsxs)("div",{className:"w-full min-h-screen h-full py-20 flex flex-col lg:gap-5 gap-2 items-center","data-aos":"fade-up",children:[(0,i.jsx)("h1",{className:"text-center font-semibold lg:text-5xl text-2xl uppercase text-gray-100",children:"Profil Sekolah"}),(0,i.jsx)("div",{className:"flex lg:flex-row flex-col w-full lg:gap-20 gap-1 mt-20 lg:px-[50px]",children:s.map(e=>{var t,a;return(0,i.jsxs)("div",{className:"flex flex-col w-full h-full gap-8 relative ",children:[(0,i.jsxs)("div",{className:"relative min-h-[400px] min-w-[400px] w-full flex items-end overflow-hidden px-10",children:[(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"}),(0,i.jsx)("div",{className:"absolute bottom-0 left-0",children:(0,i.jsx)(r.default,{src:e.image,alt:"custom-card-background",width:null===(t=e.imageResolution)||void 0===t?void 0:t.width,height:null===(a=e.imageResolution)||void 0===a?void 0:a.height,style:{objectFit:"cover",objectPosition:"center"}})})]}),(0,i.jsx)("h3",{className:"font-bold text-2xl text-white w-full uppercase text-center",children:e.text}),(0,i.jsx)(l.default,{href:e.linkUrl,prefetch:!0,children:(0,i.jsx)("button",{className:"bg-destructive cursor-pointer rounded-xl text-destructive-foreground shadow-sm hover:bg-destructive/90 flex justify-center items-center w-full px-5 py-3",children:"Read More"})})]},e.text)})})]})}},4231:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),n=a(8851),r=a(4653),l=a(6708),s=a(2265);function o(){(0,n.s)();let[e,t]=(0,s.useState)(null),a=e=>{t(e)},o=e?l.Zc.filter(t=>"Sarana Utama"===e&&"Sarana Utama"===t.category||"Laboratorium Praktek"===e&&"Lab Praktek"===t.category||"Ruang Belajar dan Pendukung"===e&&"Ruang Kelas"===t.category):l.Zc;return(0,i.jsx)("section",{id:"sarana-sekolah","data-aos":"fade-up",children:(0,i.jsxs)("div",{className:"w-full flex flex-col my-10",children:[(0,i.jsx)("h1",{className:"text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3 lg:mt-0 mt-[40rem]",children:"sarana dan fasilitas sekolah"}),(0,i.jsxs)("div",{className:"flex flex-col gap-5 mt-5",children:[(0,i.jsxs)("div",{className:"text-white text-2xl my-5 flex gap-3",children:[(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Sarana Utama"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Sarana Utama"),children:"Sarana Utama"}),(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Laboratorium Praktek"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Laboratorium Praktek"),children:"Laboratorium Praktek"}),(0,i.jsx)("button",{className:"flex gap-3 items-center cursor-pointer  ".concat("Ruang Belajar dan Pendukung"===e?"bg-destructive":""," px-7 py-3 border-none rounded-lg"),onClick:()=>a("Ruang Belajar dan Pendukung"),children:"Ruang Belajar dan Pendukung"})]}),(0,i.jsx)("div",{className:"grid lg:grid-cols-6 grid-cols-1 gap-5",children:o.map(e=>(0,i.jsx)(r.Z,{imageSource:e.name,alt:"example"},e))})]})]})})}},7238:function(e,t,a){"use strict";a.d(t,{default:function(){return f}});var i=a(7437),n=a(6648),r={src:"/_next/static/media/batik-1.382d9543.webp",height:408,width:612,blurDataURL:"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAABIAAAAAAEc9pWQSAAAAqtj474AAADj/6v/k9BwAANvl/5/7DgBWUDggPgAAALABAJ0BKggABQACQDglnAADFlyRJgAA/qNZVD26z3LZbcc78bI/C9R/LrMtmL0VH753hOs//wLNuubsYAAA",blurWidth:8,blurHeight:5},l={src:"/_next/static/media/batik-2.358bc4cc.webp",height:408,width:612,blurDataURL:"data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAIBkAAAAAAKB0W7wAAAA1+v7z+TUAAKb77dP7jgAAlPv7of9gAABWUDggQAAAABACAJ0BKggABQACQDgllAJ0R/+CB+6e4AAA/u7yvMTMKBPxnOaIL0J2u4iHwZhuEu98GAXtVX9NuCUCBmVwAAA=",blurWidth:8,blurHeight:5},s=a(6726),o={src:"/_next/static/media/kostum.4ef97fb2.webp",height:482,width:518,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAAAAAAAAAAAAAAnRwAAAABMlliOO2wABJLM6PSw0glu/+/5//r/hir71+T/gf+TG//5//+j/3cAVlA4IFwAAADQAQCdASoIAAcAAkA4JQBOgCPQSUiPoAD+8zZM1CC8CI3ibASMrURxjaTtLOfc77CdW6rGztB7pOZ8hX059/FKrAP6TJO0Y9iYKeTO4qRi0/H+MCVPQzO7wyAAAA==",blurWidth:8,blurHeight:7},c={src:"/_next/static/media/pramuka.67066932.webp",height:496,width:503,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAAAAAAAAAAAAPGgAAAABmVo6BNSYAAJqlrKCyiQBG//z//+foH5j/vvju4v+bP/+y/NGm/zxi/9D7x9X/UwBWUDggUAAAADACAJ0BKggACAACQDgljAJ0gTEYtvxtJCGAAP70fezK09/M5AUEvNGZExJHx3aAhvmuujvfArwqpZ/XaW+GaXJGd8g623PgIOxJgD0OhAAA",blurWidth:8,blurHeight:8},d=a(8851);let u=["biru dan putih","batik","batik","kostum","pramuka"];function f(){return(0,d.s)(),(0,i.jsxs)("section",{id:"seragam",children:[(0,i.jsx)("h1",{className:"lg:text-5xl text-2xl font-semibold uppercase text-center text-white p-6","data-aos":"fade-up",children:"seragam sekolah"}),(0,i.jsxs)("div",{className:"flex flex-col mt-10",children:[(0,i.jsx)("div",{className:"flex justify-end w-full",children:(0,i.jsxs)("div",{className:"relative w-full",children:[(0,i.jsxs)("div",{className:"flex lg:flex-row flex-col gap-3",children:[(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"}),(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"}),(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"}),(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"}),(0,i.jsx)("div",{className:"rounded-rectangle ml-auto"})]}),(0,i.jsxs)("div",{className:"flex w-full absolute top-0",children:[(0,i.jsx)("div",{className:"flex gap-10 z-10",children:(0,i.jsx)(n.default,{src:s.default,width:250,height:250,alt:"seragam-batik",style:{objectFit:"cover",objectPosition:"center"}})}),(0,i.jsx)("div",{className:"flex z-10",children:(0,i.jsx)(n.default,{src:r,width:250,height:250,alt:"seragam-batik",style:{objectFit:"cover",objectPosition:"center",marginLeft:"50px"}})}),(0,i.jsx)("div",{className:"flex z-10",children:(0,i.jsx)(n.default,{src:l,width:250,height:250,alt:"seragam-batik",style:{objectFit:"cover",objectPosition:"center",marginLeft:"50px"}})}),(0,i.jsx)("div",{className:"flex z-10",children:(0,i.jsx)(n.default,{src:o,width:250,height:250,alt:"seragam-kostum",style:{objectFit:"cover",objectPosition:"center",marginLeft:"50px"}})}),(0,i.jsx)("div",{className:"flex z-10",children:(0,i.jsx)(n.default,{src:c,width:250,height:250,alt:"seragam-pramuka",style:{objectFit:"cover",objectPosition:"center",marginLeft:"50px"}})})]})]})}),(0,i.jsx)("div",{className:"w-full h-full bg-blue-secondary p-4 flex lg:flex-row flex-col justify-between pr-32",children:u.map(e=>(0,i.jsx)("h3",{className:"font-bold text-xl text-white uppercase",children:e},e))})]})]})}},6903:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var i=a(7437);function n(e){let{showAddressLabel:t}=e;return(0,i.jsxs)("div",{className:"flex flex-col w-full justify-end items-start py-4",children:[(0,i.jsx)("h1",{className:"2xl:text-3xl xl:text-3xl text-xl uppercase bg-yellow-400 font-semibold p-4 rounded-r-full pr-10 min-w-[750px]",children:"mutiara"}),(0,i.jsx)("h1",{className:"2xl:text-3xl xl:text-3xl text-xl uppercase bg-blue-400 font-semibold p-4 text-white rounded-r-full pr-10 min-w-[850px]",children:"mutu, intelektual dan karakter"}),t&&(0,i.jsx)("h1",{className:"2xl:text-3xl xl:text-3xl text-xl uppercase bg-blue-700 font-semibold p-4 text-white min-w-[750px]",children:"alamat sekolah sesuai gps"})]})}},4483:function(e,t,a){"use strict";a.d(t,{default:function(){return o}});var i=a(7437),n=a(6648),r=a(6903),l=a(6726),s=a(8851);function o(e){let{showAddressLabel:t}=e;return(0,s.s)(),(0,i.jsx)("section",{id:"tentang-kami",children:(0,i.jsxs)("div",{className:"w-full min-h-screen h-full relative flex gap-3 lg:mt-0 mb-20","data-aos":"fade-up",children:[(0,i.jsxs)("div",{className:"flex lg:flex-row flex-col justify-between",children:[(0,i.jsx)("div",{className:"w-full h-full flex items-center p-5",children:(0,i.jsxs)("div",{className:"lg:w-[750px] w-full lg:p-10 p-6 bg-gray-200 absolute right-0 top-20",children:[(0,i.jsx)("h3",{className:"font-semibold text-2xl uppercase text-gray-700 text-center",children:"deskripsi"}),(0,i.jsx)("h3",{className:"text-lg font-regular text-gray-600 mt-5",children:"MUTIARA (Mutu, Intelektual & Karakter): Yang mempunyai arti bahwa SMP Negeri 1 Dobo menjadikan Mutu sebagai tujuan utama, dengan sarana Intelektual Guru dan Peserta Didik yang berpedoman kepada Karakter Bangsa dalam mewujudkan Peserta Didik Cerdas dan Kompetitif."})]})}),(0,i.jsx)("div",{className:"w-[750px] h-[600px] p-4 absolute lg:bottom-0 -bottom-[40rem] lg:left-10 -left-10 mb-5",children:(0,i.jsx)(n.default,{src:l.default,fill:!0,style:{objectFit:"cover"},alt:"model"})})]}),(0,i.jsx)("div",{className:"absolute lg:bottom-0 -bottom-[40rem] left-0",children:(0,i.jsx)(r.Z,{showAddressLabel:t})})]})})}},8851:function(e,t,a){"use strict";a.d(t,{s:function(){return l}});var i=a(2265),n=a(7323),r=a.n(n);function l(){(0,i.useEffect)(()=>{r().init()},[])}a(3023)},7323:function(e){var t;t=function(){return function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="dist/",t(0)}([function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r=(i(a(1)),a(6)),l=i(r),s=i(a(7)),o=i(a(8)),c=i(a(9)),d=i(a(10)),u=i(a(11)),f=i(a(14)),m=[],A=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(A=!0),A)return m=(0,u.default)(m,x),(0,d.default)(m,x.once),m},g=function(){m=(0,f.default)(),h()},b=function(){m.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){x=n(x,e),m=(0,f.default)();var t,a=document.all&&!window.atob;return!0===(t=x.disable)||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()||a?b():(x.disableMutationObserver||o.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?h(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){h(!0)}):document.addEventListener(x.startEvent,function(){h(!0)}),window.addEventListener("resize",(0,s.default)(h,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(h,x.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)(function(){(0,d.default)(m,x.once)},x.throttleDelay)),x.disableMutationObserver||o.default.ready("[data-aos]",g),m)},refresh:h,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&h.call(t)==s)return l;if(a(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=a(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var r=d.test(e=e.replace(o,""));return r||u.test(e)?f(e.slice(2),r?2:8):c.test(e)?l:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r="Expected a function",l=NaN,s="[object Symbol]",o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,m="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,A="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,x=m||A||Function("return this")(),h=Object.prototype.toString,g=Math.max,b=Math.min,p=function(){return x.Date.now()};e.exports=function(e,t,n){var l=!0,s=!0;if("function"!=typeof e)throw TypeError(r);return a(n)&&(l="leading"in n?!!n.leading:l,s="trailing"in n?!!n.trailing:s),function(e,t,n){function l(t){var a=u,i=f;return u=f=void 0,v=t,A=e.apply(i,a)}function s(e){var a=e-h,i=e-v;return void 0===h||a>=t||a<0||j&&i>=m}function o(){var e,a,i,n=p();return s(n)?c(n):void(x=setTimeout(o,(e=n-h,a=n-v,i=t-e,j?b(i,m-a):i)))}function c(e){return x=void 0,y&&u?l(e):(u=f=void 0,A)}function d(){var e,a=p(),i=s(a);if(u=arguments,f=this,h=a,i){if(void 0===x)return v=e=h,x=setTimeout(o,t),w?l(e):A;if(j)return x=setTimeout(o,t),l(h)}return void 0===x&&(x=setTimeout(o,t)),A}var u,f,m,A,x,h,v=0,w=!1,j=!1,y=!0;if("function"!=typeof e)throw TypeError(r);return t=i(t)||0,a(n)&&(w=!!n.leading,m=(j="maxWait"in n)?g(i(n.maxWait)||0,t):m,y="trailing"in n?!!n.trailing:y),d.cancel=function(){void 0!==x&&clearTimeout(x),v=0,u=h=f=x=void 0},d.flush=function(){return void 0===x?A:c(p())},d}(e,t,{leading:l,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function i(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&x.call(t)==l)return r;if(a(e)){var t,i="function"==typeof e.valueOf?e.valueOf():e;e=a(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;var f=c.test(e=e.replace(s,""));return f||d.test(e)?u(e.slice(2),f?2:8):o.test(e)?r:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=NaN,l="[object Symbol]",s=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,f="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,A=f||m||Function("return this")(),x=Object.prototype.toString,h=Math.max,g=Math.min,b=function(){return A.Date.now()};e.exports=function(e,t,n){function r(t){var a=d,i=u;return d=u=void 0,p=t,m=e.apply(i,a)}function l(e){var a=e-x,i=e-p;return void 0===x||a>=t||a<0||w&&i>=f}function s(){var e,a,i,n=b();return l(n)?o(n):void(A=setTimeout(s,(e=n-x,a=n-p,i=t-e,w?g(i,f-a):i)))}function o(e){return A=void 0,j&&d?r(e):(d=u=void 0,m)}function c(){var e,a=b(),i=l(a);if(d=arguments,u=this,x=a,i){if(void 0===A)return p=e=x,A=setTimeout(s,t),v?r(e):m;if(w)return A=setTimeout(s,t),r(x)}return void 0===A&&(A=setTimeout(s,t)),m}var d,u,f,m,A,x,p=0,v=!1,w=!1,j=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=i(t)||0,a(n)&&(v=!!n.leading,f=(w="maxWait"in n)?h(i(n.maxWait)||0,t):f,j="trailing"in n?!!n.trailing:j),c.cancel=function(){void 0!==A&&clearTimeout(A),p=0,d=x=u=A=void 0},c.flush=function(){return void 0===A?m:o(b())},c}}).call(t,function(){return this}())},function(e,t){"use strict";function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,i=void 0;for(a=0;a<t.length;a+=1)if((i=t[a]).dataset&&i.dataset.aos||i.children&&e(i.children))return!0;return!1}(t.concat(a)))return n()})}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){};t.default={isSupported:function(){return!!a()},ready:function(e,t){var r=window.document,l=new(a())(i);n=t,l.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return i(e,[{key:"phone",value:function(){var e=a();return!(!n.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=a();return!(!l.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===i||"false"!==i&&(a||"true"===i)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var i=window.pageYOffset,n=window.innerHeight;e.forEach(function(e,r){a(e,n+i,t)})}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=(i=a(12))&&i.__esModule?i:{default:i};t.default=function(e,t){return e.forEach(function(e,a){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)}),e}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=(i=a(13))&&i.__esModule?i:{default:i};t.default=function(e,t){var a=0,i=0,r=window.innerHeight,l={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(l.offset&&!isNaN(l.offset)&&(i=parseInt(l.offset)),l.anchor&&document.querySelectorAll(l.anchor)&&(e=document.querySelectorAll(l.anchor)[0]),a=(0,n.default)(e).top,l.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=e.offsetHeight/2;break;case"bottom-bottom":a+=e.offsetHeight;break;case"top-center":a+=r/2;break;case"bottom-center":a+=r/2+e.offsetHeight;break;case"center-center":a+=r/2+e.offsetHeight/2;break;case"top-top":a+=r;break;case"bottom-top":a+=e.offsetHeight+r;break;case"center-top":a+=e.offsetHeight/2+r}return l.anchorPlacement||l.offset||isNaN(t)||(i=t),a+i}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},e.exports=t()},1929:function(e,t,a){"use strict";function i(e){if(""===e||void 0===e)return;let t=new Date(e);return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(t)}function n(e){if(""===e||void 0===e)return;let t=new Date(e);return new Intl.DateTimeFormat("id-ID",{month:"long",year:"numeric"}).format(t)}function r(e){if(""!==e&&void 0!==e)return new Date(e).getDate()}a.d(t,{Uo:function(){return i},fk:function(){return r},mQ:function(){return n}})},7395:function(e,t,a){"use strict";function i(e,t){if(void 0!==e)return e.length<=t?e:(null==e?void 0:e.slice(0,t-3))+"..."}a.d(t,{W:function(){return i}})},3023:function(){},6726:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/model.6816d0ba.webp",height:408,width:612,blurDataURL:"data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAAgMAAAAABJRod74ZAAA/9uDd+5gAAKf56vXi4wcAa//f/M/ZAABWUDggRAAAANABAJ0BKggABQACQDglnAJ0AQ5n8nAAAP7tERNsQ/fWbL1iiC9pNRTrmuNxJS/e/1+PfbPp4DTagXYBnI1IUshcAAAA",blurWidth:8,blurHeight:5}}},function(e){e.O(0,[6704,3665,7699,8310,1994,4030,1003,38,338,6708,8729,2971,7023,1744],function(){return e(e.s=7483)}),_N_E=e.O()}]);