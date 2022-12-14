// opt1
const dts1 = [...document.getElementsByClassName('dt1')];
const dds1 = [...document.getElementsByClassName('dd1')];
dts1.forEach((dt,i) => {
   dt.addEventListener("click", function() {
      this.classList.toggle("show");
      var dd = this.nextElementSibling;
      dd.style.maxHeight ? dd.style.maxHeight = null : dd.style.maxHeight = dd.scrollHeight + "px";
   });
});
addEventListener('resize',()=>{dts1.forEach((dt,i)=>{if(dt.classList.contains("show")) dds1[i].style.maxHeight = dds1[i].scrollHeight + "px";})})


// opt2
const dts2 = [...document.getElementsByClassName('dt2')];
const dds2 = [...document.getElementsByClassName('dd2')];
dts2.forEach((dt,i) => {
   dt.addEventListener("click", ()=> {
      for (const dt of dts2) {dt.classList.remove("show")}
      for (const dd of dds2) {dd.style.maxHeight = null;}
      dt.classList.add("show");
      dds2[i].style.maxHeight = dds2[i].scrollHeight + "px";
   });
});
addEventListener('resize',()=>{dts2.forEach((dt,i)=>{if(dt.classList.contains("show")) dds2[i].style.maxHeight = dds2[i].scrollHeight + "px";})})


// opt3
const dts3 = [...document.getElementsByClassName('dt3')];
const dds3 = [...document.getElementsByClassName('dd3')];
dts3.forEach((dt,i) => {
   dt.addEventListener("click", ()=> {
      if (dts3[i].classList.contains("show")) {
         dts3[i].classList.remove("show");
         dds3[i].style.maxHeight = null;
      } else {
         for (const dt of dts3) {dt.classList.remove("show")}
         for (const dd of dds3) {dd.style.maxHeight = null;}
         dt.classList.toggle("show");
         dds3[i].style.maxHeight = dds3[i].scrollHeight + "px";
      }
   });
});
addEventListener('resize',()=>{dts3.forEach((dt,i)=>{if(dt.classList.contains("show")) dds3[i].style.maxHeight = dds3[i].scrollHeight + "px";})})