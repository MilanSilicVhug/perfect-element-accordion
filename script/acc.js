// opt1 - every acc cell can be opened
const dts1 = [...document.getElementsByClassName('dt1')];
const dds1 = [...document.getElementsByClassName('dd1')];
dts1.forEach((dt,i) => {
    dt.addEventListener("click", function() {
        this.classList.toggle("active");
        var dd = this.nextElementSibling;
        if (dd.style.maxHeight) {
            dd.style.maxHeight = null;
        } else {
            dd.style.maxHeight = dd.scrollHeight + "px";
        }
    });
    addEventListener('resize', ()=> {
        if (dts1[i].classList.contains("active")) {dds1[i].style.maxHeight = dds1[i].scrollHeight + "px";};
    })
});


// opt2 - only one acc cell can be opened, can't close opened
const dts2 = [...document.getElementsByClassName('dt2')];
const dds2 = [...document.getElementsByClassName('dd2')];
dts2.forEach((dt,i) => {
    dt.addEventListener("click", ()=> {
        for (const dt of dts2) {dt.classList.remove("active")}
        for (const dd of dds2) {dd.style.maxHeight = null;}
        dt.classList.add("active");
        dds2[i].style.maxHeight = dds2[i].scrollHeight + "px";
    });
    addEventListener('resize', ()=> {if (dts2[i].classList.contains("active")) dds2[i].style.maxHeight = dds2[i].scrollHeight + "px"})
});


// opt3 - only one acc cell can be opened, can close opened
const dts3 = [...document.getElementsByClassName('dt3')];
const dds3 = [...document.getElementsByClassName('dd3')];
dts3.forEach((dt,i) => {
    dt.addEventListener("click", ()=> {
        if (dts3[i].classList.contains("active")) {
            dts3[i].classList.remove("active");
            dds3[i].style.maxHeight = null;
        } else {
            for (const dt of dts3) {dt.classList.remove("active")}
            for (const dd of dds3) {dd.style.maxHeight = null;}
            dt.classList.toggle("active");
            dds3[i].style.maxHeight = dds3[i].scrollHeight + "px";
        }
    });
    addEventListener('resize', ()=> {if (dts3[i].classList.contains("active")) dds3[i].style.maxHeight = dds3[i].scrollHeight + "px"})
});