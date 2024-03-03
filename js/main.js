//logic for the minu btn
let minuBtn = document.querySelector("header .minu-btn");
let links =  document.querySelector("header .links");
minuBtn.addEventListener("click",(event)=>{
    links.classList.toggle("active");
})

//logic for the links
let linksA = document.querySelectorAll("header .links a");
let sections = document.querySelectorAll(".main-section");
linksA.forEach((li,ind)=>{
    li.addEventListener("click",(event)=>{
        //mark active link
        linksA.forEach((l)=>{
            l.classList.remove("active");
        })
        event.target.classList.add("active");  
        
        //change the section
        sections.forEach((sec)=>{
            sec.classList.remove("active");
        })
        setTimeout(()=>{
        sections.forEach((sec)=>{
            sec.classList.remove("block");
        })
            sections[ind].classList.add("active");
            sections[ind].classList.add("block");

        },400)
        
        //close links list
        links.classList.remove("active");
    
    })    
})

//logic for the background controle
let bgControle = document.querySelectorAll(".background-controle .bg-controle");
let bgSpans = document.querySelectorAll(".backgroundS");
let currentBg = 0;
bgControle.forEach((btn,ind)=>{
    btn.addEventListener("click",(event)=>{
        //change background
        bgSpans.forEach((ele)=>{
            ele.classList.remove("active");
        })
        setTimeout(()=>{
            bgSpans[ind].classList.add("active");
        },200)

        //controle btns
        bgControle.forEach((e)=>{
            e.classList.remove("active");
        })
        event.currentTarget.classList.add("active");

        currentBg = ind;
    })
})


//otomaticly background change
setInterval(()=>{
    if(currentBg < 2){
        currentBg++;
        //change background
        bgSpans.forEach((ele)=>{
            ele.classList.remove("active");
        })
        setTimeout(()=>{
            bgSpans[currentBg].classList.add("active");
        },200)

        //controle btns
        bgControle.forEach((e)=>{
            e.classList.remove("active");
        })
        bgControle[currentBg].classList.add("active");
    }else{
        currentBg = 0;
            //change background
        bgSpans.forEach((ele)=>{
            ele.classList.remove("active");
        })
        setTimeout(()=>{
            bgSpans[currentBg].classList.add("active");
        },200)

        //controle btns
        bgControle.forEach((e)=>{
            e.classList.remove("active");
        })
        bgControle[currentBg].classList.add("active");
    }
    
},8000)